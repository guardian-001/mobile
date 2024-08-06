import type { TxKeyPath } from '@/core';
import { useCustomForm } from '@/core';
import { useFormStepper } from '@/shared';

import { ImagesRealizationSchema } from '../schemas';
import type { ProjectRealizationType } from '../types';
import { useImagePicker } from './use-image-picker';

export const useGallery = () => {
  type ImagesFormType = Pick<ProjectRealizationType, 'realizationImages'>;
  const { formData, setFormData, onHandleBack, onHandleNext } =
    useFormStepper<ProjectRealizationType>();
  const { handleSubmit, errors, control } = useCustomForm(
    ImagesRealizationSchema,
    {
      realizationImages: formData.realizationImages,
    }
  );
  const onSubmit = (data: ImagesFormType) => {
    setFormData((prev: ProjectRealizationType) => ({
      ...prev,
      ...data,
    }));
    onHandleNext();
  };
  const {
    images,
    selectedImage,
    error,
    pickImages,
    removeImage,
    handleImagePress,
  } = useImagePicker<ImagesFormType>({ control, name: 'realizationImages' });
  const errorsImages = errors.realizationImages?.message as
    | TxKeyPath
    | undefined;
  return {
    images,
    selectedImage,
    error,
    pickImages,
    removeImage,
    handleImagePress,
    errorsImages,
    onSubmit,
    formData,
    setFormData,
    onHandleBack,
    onHandleNext,
    handleSubmit,
    errors,
    control,
  };
};
