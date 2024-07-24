import { useRouter } from 'expo-router';

import { useCustomForm } from '@/core';
import { useFormStepper } from '@/shared';
import type { AnnouncementType } from '@/types/announcement';

import { CreateAnnouncementStepTwelveSchema } from '../schemas';
import type { CreateProfileFormType } from '../types';

export const useProject = () => {
  const router = useRouter();
  const { onHandleBack, onHandleNext, setFormData, formData } =
    useFormStepper<AnnouncementType>();
  const { handleSubmit, control } = useCustomForm(
    CreateAnnouncementStepTwelveSchema,
    {
      firstName: formData?.firstName,
      lastName: formData?.lastName,
      email: formData?.email,
      phoneNumber: formData?.phoneNumber,
      rules: formData?.rules,
      receiveNotifications: formData?.receiveNotifications,
    }
  );

  const onSubmit = (data: CreateProfileFormType) => {
    setFormData((prev: any) => ({
      ...prev,
      ...data,
    }));
    router.back();
  };
  return {
    onHandleBack,
    onHandleNext,
    setFormData,
    formData,
    handleSubmit,
    control,
    onSubmit,
  };
};
