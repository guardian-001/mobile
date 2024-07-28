import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import {
  type Control,
  type FieldValues,
  type Path,
  type RegisterOptions,
  useController,
} from 'react-hook-form';

import { useFormStepper } from '@/shared';

import type { ImageInfo, ProjectRealizationType } from '../types';
export type ImagesPickerProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  rules?: RegisterOptions;
};
export const useImagePicker = <T extends FieldValues>({
  name,
  control,
  rules,
}: ImagesPickerProps<T>) => {
  const { formData } = useFormStepper<ProjectRealizationType>();
  const [images, setImages] = useState<ImageInfo[]>(formData.realizationImages);
  const [selectedImage, setSelectedImage] = useState<ImageInfo>(
    formData.realizationImages[0]
  );
  const [error, setError] = useState<string>('');
  const { field } = useController({ control, name, rules });

  const requestPermissions = async () => {
    await ImagePicker.requestMediaLibraryPermissionsAsync();
  };

  const pickImages = async () => {
    await requestPermissions();
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      quality: 1,
    });
    if (!result.canceled) {
      const selectedImages = result.assets.map((asset) => ({
        name: asset.fileName,
        uri: asset.uri,
        type: asset.mimeType,
      }));
      setImages((prev) => [...prev, ...selectedImages]);
      setSelectedImage(selectedImages[0]);
      field.onChange([...images, ...selectedImages]);
      ('');
    }
    const validFiles = images.filter(
      (image) => image?.type?.split('/')[0] === 'image'
    );
    if (validFiles.length < images.length) {
      setError('realisation.galleryStep.typeFileError');
    } else {
      setError('');
    }
  };

  const removeImage = (index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    setSelectedImage(images[0]);
  };

  const handleImagePress = (index: number) => {
    setSelectedImage(images[index]);
  };

  return {
    images,
    selectedImage,
    error,
    pickImages,
    removeImage,
    handleImagePress,
  };
};
