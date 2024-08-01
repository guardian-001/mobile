import type { TxKeyPath } from '@/core';
import { useCustomForm } from '@/core';
import { useFormStepper } from '@/shared';
import type { AnnouncementType } from '@/types/announcement';

import { CreateAnnouncementStepElevenSchema } from '../schemas';
import type { ImagesFormType } from '../types';
import { useImagePicker } from './use-image-picker';

export const useGallery = () => {
  const { formData, setFormData, onHandleBack, onHandleNext } =
    useFormStepper<AnnouncementType>();

  const { handleSubmit, errors, control } = useCustomForm(
    CreateAnnouncementStepElevenSchema,
    { projectImages: formData.projectImages }
  );
  const onSubmit = (data: ImagesFormType) => {
    setFormData((prev: AnnouncementType) => ({
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
  } = useImagePicker<ImagesFormType>({ control, name: 'projectImages' });
  const errorsImages = errors.projectImages?.message as TxKeyPath | undefined;
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
