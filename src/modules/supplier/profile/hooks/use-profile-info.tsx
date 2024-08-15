import { Env } from '@env';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

import { useSupplierProfileApi } from '@/api/supplier/profile/use-profile';
import { useUpdateCoverPictureApi } from '@/api/supplier/profile/use-update-cover-picture';
import { useUpdateProfilePictureApi } from '@/api/supplier/profile/use-update-profile-picture';

export const useProfileInfo = () => {
  const { data, isError, isLoading, isPending, isSuccess } =
    useSupplierProfileApi();
  const {
    mutate: mutateCover,
    isError: errorCover,
    isPending: PendingCover,
  } = useUpdateCoverPictureApi();
  const {
    mutate: mutateProfile,
    isError: errorProfile,
    isPending: PendingProfile,
  } = useUpdateProfilePictureApi();
  const requestPermissions = async () => {
    await ImagePicker.requestMediaLibraryPermissionsAsync();
  };
  const [selectedProfileImage, setSelectedProfileImage] = useState<string>(
    data?.profileImage ? `${Env.API_URL}${data?.profileImage}` : ''
  );
  const [selectedCoverImage, setSelectedCoverImage] = useState<string>(
    data?.coverImage ? `${Env.API_URL}${data?.coverImage}` : ''
  );
  const [error, setError] = useState<string>('');
  const pickImage = async () => {
    await requestPermissions();
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      allowsMultipleSelection: false,
    });
    if (!result.canceled) {
      return result.assets[0];
    }
  };
  async function convertImagePickerAssetToFile(
    asset: ImagePicker.ImagePickerAsset
  ): Promise<File> {
    const response = await fetch(asset.uri);
    const blob = await response.blob();
    const file = new File([blob], asset.fileName || 'image.png', {
      type: blob.type || 'image/png',
    });
    return file;
  }
  const uploadImage = async (
    image: ImagePicker.ImagePickerAsset,
    type: 'profile' | 'cover'
  ) => {
    const formData = new FormData();
    const file = await convertImagePickerAssetToFile(image);
    // TODO: const blobNew = new Blob([image.uri]);
    formData.append('profile_image', file);
    if (type === 'profile') {
      try {
        const response = await mutateProfile(formData);
        return response;
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    } else {
      const response = mutateCover(formData);
      return response;
    }
  };
  const onSubmitPickImage = async (type: 'profile' | 'cover') => {
    const image = await pickImage();
    if (image) {
      await uploadImage(image, type);
    }
  };
  return {
    error,
    data,
    isError,
    isLoading,
    isPending,
    isSuccess,
    onSubmitPickImage,
    PendingProfile,
    errorProfile,
    PendingCover,
    errorCover,
    selectedCoverImage,
    selectedProfileImage,
    setSelectedCoverImage,
    setSelectedProfileImage,
    setError,
  };
};
