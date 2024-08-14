import { useRouter } from 'expo-router';
import { useEffect } from 'react';

import type { User } from '@/api/auth';
import { useUpdateProfileApi, useUserProfileApi } from '@/api/profileSettings';
import { useCustomForm } from '@/core';
import { setUser } from '@/core/auth/utils';
import { showSuccesMessage } from '@/shared/components';

import { EmailSchema } from '../schemas';
import type { EmailFormType } from '../type';

export const useUpdateEmail = () => {
  const { handleSubmit, control, form, reset } = useCustomForm(EmailSchema);
  const router = useRouter();
  const { data, isSuccess } = useUserProfileApi();
  let user: User | undefined = data?.user;

  useEffect(() => {
    if (isSuccess && data) {
      reset({
        email: user?.email,
      });
    }
  }, [isSuccess, data, user, reset]);

  const updateProfile = useUpdateProfileApi();

  const onSubmit = (data: EmailFormType) => {
    if (data.email !== user?.email) {
      updateProfile.mutate(data, {
        onSuccess: (response) => {
          showSuccesMessage(response.data.message);
          setUser(response.data.user);
          router.back();
          router.back();
        },
      });
    } else {
      router.back(), router.back();
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
