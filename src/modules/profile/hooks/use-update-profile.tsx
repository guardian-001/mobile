import { useRouter } from 'expo-router';
import { useEffect } from 'react';

import type { User } from '@/api/auth';
import { useUpdateProfileApi, useUserProfileApi } from '@/api/profileSettings';
import { useCustomForm } from '@/core';
import { showSuccesMessage } from '@/shared/components';

import { BasicInformationSchema } from '../schemas';
import type { BasicInfoFormType } from '../type';

export const useUpdateProfile = () => {
  const { handleSubmit, control, form, reset } = useCustomForm(
    BasicInformationSchema
  );
  const router = useRouter();
  const { data, isSuccess, isLoading } = useUserProfileApi();
  let user: User | undefined = data?.user;

  useEffect(() => {
    if (isSuccess && data) {
      reset({
        firstName: user?.firstName,
        lastName: user?.lastName,
        email: user?.email,
        phoneNumber: user?.phoneNumber,
      });
    }
  }, [isSuccess, data, user, reset]);

  const updateProfile = useUpdateProfileApi();

  const onSubmit = (data: BasicInfoFormType) => {
    if (
      data.firstName !== user?.firstName ||
      data.lastName !== user?.lastName ||
      data.email !== user?.email ||
      data.phoneNumber !== user?.phoneNumber
    ) {
      updateProfile.mutate(data, {
        onSuccess: (response) => {
          showSuccesMessage(response.data.message);
          router.back();
        },
      });
    } else router.back();
  };
  return {
    control,
    form,
    reset,
    handleSubmit,
    onSubmit,
    isSuccess,
    isLoading,
  };
};
