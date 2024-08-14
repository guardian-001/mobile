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
    data: dataCover,
  } = useUpdateCoverPictureApi();
  const {
    mutate: mutateProfile,
    isError: errorProfile,
    isPending: PendingProfile,
    data: dataProfile,
  } = useUpdateProfilePictureApi();

  console.log(data);

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

  const pickImage = async (type: 'profile' | 'cover') => {
    await requestPermissions();

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: false,
      quality: 1,
    });

    if (!result.canceled && result.assets.length > 0) {
      if (result.assets[0].mimeType?.split('/')[0] !== 'image') {
        setError('realisation.galleryStep.typeFileError');
      }
      const selectedImage = {
        name: result.assets[0].fileName,
        uri: result.assets[0].uri,
        type: result.assets[0].mimeType,
      };
      console.log(selectedImage);

      const formData = new FormData();
      formData.append('file', result.assets[0].uri);
      console.log(formData);
      if (type === 'profile') {
        const response = mutateProfile(formData);

        console.log(dataProfile);
        console.log(isLoading);
        return response;
      } else {
        console.log(dataCover);
        const response = mutateCover(formData);

        return response;
      }
    } else {
      setError('error');
    }
  };

  return {
    error,
    data,
    isError,
    isLoading,
    isPending,
    isSuccess,
    pickImage,
    PendingProfile,
    errorProfile,
    PendingCover,
    errorCover,
    selectedCoverImage,
    selectedProfileImage,
    setSelectedCoverImage,
    setSelectedProfileImage,
  };
};
