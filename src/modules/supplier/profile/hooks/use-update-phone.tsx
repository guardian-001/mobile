import { useRouter } from 'expo-router';
import { useEffect } from 'react';

import type { User } from '@/api/auth';
import { useUpdateProfileApi, useUserProfileApi } from '@/api/profileSettings';
import { useCustomForm } from '@/core';
import { setUser } from '@/core/auth/utils';
import { showSuccesMessage } from '@/shared/components';

import { PhoneNumberSchema } from '../schemas';
import type { PhoneFormType } from '../type';

export const useUpdatephone = () => {
  const { handleSubmit, control, form, reset } =
    useCustomForm(PhoneNumberSchema);
  const router = useRouter();
  const { data, isSuccess } = useUserProfileApi();
  let user: User | undefined = data?.user;

  useEffect(() => {
    if (isSuccess && data) {
      reset({
        phoneNumber: user?.phoneNumber,
      });
    }
  }, [isSuccess, data, user, reset]);

  const updateProfile = useUpdateProfileApi();

  const onSubmit = (dataPhone: PhoneFormType) => {
    if (dataPhone.phoneNumber !== user?.phoneNumber) {
      updateProfile.mutate(dataPhone, {
        onSuccess: (response) => {
          showSuccesMessage(response.data.message);
          setUser(response.data.user);
          router.back();
          router.back();
        },
      });
    } else {
      router.back();
      router.back();
    }
  };
  return {
    control,
    form,
    reset,
    handleSubmit,
    onSubmit,
  };
};
