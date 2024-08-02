import { useRouter } from 'expo-router';
import { useState } from 'react';

import { useLoginApi } from '@/api/auth';
import { useAuth, useCustomForm, useRouteName } from '@/core';
import { useLoginForm } from '@/shared';
import { LoginFormSchema } from '@/shared/validations';

import type { LoginFormType, LoginType } from '../../login-form';

export const useLoginShared = () => {
  const router = useRouter();
  const space = useRouteName();
  const [checked, setChecked] = useState(true);
  const [errors, setErrors] = useState('');
  const { handleSubmit, control } = useCustomForm(LoginFormSchema);
  const login = useLoginApi();
  const signIn = useAuth.use.signIn();

  const onSubmit = (data: LoginFormType) => {
    login.mutate(data, {
      onSuccess: (ResponseData) => {
        signIn({
          token: {
            access: ResponseData.response?.data.access,
            refresh: ResponseData.response?.data.refresh,
          },
          user: ResponseData.response?.data.user,
        });
        router.push(`/(${space})/(private)/profile`);
      },
      onError: (error) => {
        setErrors(error.message);
      },
    });
  };

  const handleResetPass = () => {
    router.push(`/(${space})/(public)/reset-password`);
  };

  const { setFormData } = useLoginForm();

  const handleData = ({ name, data }: LoginType) => {
    setFormData((prev: any) => ({
      ...prev,
      [name]: data,
    }));
  };
  return {
    handleData,
    handleResetPass,
    errors,
    checked,
    setChecked,
    handleSubmit,
    control,
    onSubmit,
  };
};
