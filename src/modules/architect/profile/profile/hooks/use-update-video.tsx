import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

import { useUpdateSupplierVideoApi } from '@/api/supplier/profile/use-update-supplier-video';
export const useUpdateVideo = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [newVideo, setNewVideo] = useState<boolean>(false);
  const { data: supplierData } = useUpdateSupplierVideoApi();
  const { mutate, isError, isPending, data } = useUpdateSupplierVideoApi();

  const requestPermissions = async () => {
    await ImagePicker.requestMediaLibraryPermissionsAsync();
  };

  const pickVideo = async () => {
    await requestPermissions();
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedVideo(result.assets[0]?.uri);
      setNewVideo(true);
    }
  };
  const uploadVideo = async (video: string) => {
    const formData = new FormData();
    const blobNew = new Blob([video ?? '']);
    formData.append('presentation_video', blobNew);

    try {
      const response = await mutate(formData);

      return response;
    } catch (error) {
      console.error('Error uploading video:', error);
    }
  };
  const onSubmit = async () => {
    if (selectedVideo) {
      await uploadVideo(selectedVideo);
    }
  };
  const onDelete = async () => {
    if (selectedVideo) {
      setSelectedVideo(null);
      setNewVideo(false);
    }
  };

  return {
    selectedVideo,
    supplierData,
    isError,
    isPending,
    data,
    pickVideo,
    onSubmitVideo: onSubmit,
    newVideo,
    onDelete,
  };
};
