import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

import { useArchitectProfileApi } from '@/api/architect/profile/use-profile';
import { useUpdateProfilePictureApi } from '@/api/supplier/profile/use-update-profile-picture';

export const useProfileInfo = () => {
  const { data, isError, isLoading, isPending, isSuccess, refetch } =
    useArchitectProfileApi();

  const {
    mutate: mutateProfile,
    isError: errorProfile,
    isPending: PendingProfile,
  } = useUpdateProfilePictureApi();
  const requestPermissions = async () => {
    await ImagePicker.requestMediaLibraryPermissionsAsync();
  };
  const [selectedProfileImage, setSelectedProfileImage] = useState<string>(
    data?.companyLogo ? data?.companyLogo : ''
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
  const uploadImage = async (image: ImagePicker.ImagePickerAsset) => {
    const formData = new FormData();
    const file = await convertImagePickerAssetToFile(image);
    // TODO: const blobNew = new Blob([image.uri]);
    formData.append('profile_image', file);
    try {
      const response = await mutateProfile(formData);
      return response;
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };
  const onSubmitPickImage = async () => {
    const image = await pickImage();
    if (image) {
      await uploadImage(image);
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
    selectedProfileImage,
    setSelectedProfileImage,
    setError,
    refetch,
  };
};
