import { useRouter } from 'expo-router';
import { useState } from 'react';

import { useLoginApi } from '@/api/auth';
import { translate, useAuth, useCustomForm, useRouteName } from '@/core';
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
            access: ResponseData.data.access,
            refresh: ResponseData.data.refresh,
          },
          user: ResponseData.data.user,
        });
        if (space === 'supplier') {
          router.replace(`/(supplier)/(private)/(tab)/(profile)/profile`);
        } else if (space === 'client') {
          router.replace(`/(client)/(private)/(tab)/projets`);
        } else {
          router.replace(`/(${space})/(private)/profile`);
        }
      },
      onError: () => {
        setErrors(translate('login.loginError'));
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
