import { useRouter } from 'expo-router';
import { useState } from 'react';

import { useLoginApi } from '@/api/auth';
import { useCustomForm, useRouteName } from '@/core';
import type { LoginSupplierFormType } from '@/modules/supplier/shared/types';
import { useFormStepper } from '@/shared';
import { LoginFormSchema } from '@/shared/validations';
import type { LoginFormType } from '@/types';

export const useLoginSupplier = () => {
  const { formData, setFormData } = useFormStepper<LoginSupplierFormType>();
  const { handleSubmit, control } = useCustomForm(LoginFormSchema, {
    email: formData.email,
    password: formData.password,
  });

  const [error, setError] = useState<string>('');

  const router = useRouter();
  const space = useRouteName();

  const login = useLoginApi();

  const updateData = async (data: LoginFormType) => {
    setFormData((prev: LoginSupplierFormType) => ({
      ...prev,
      ...data,
    }));
  };
  const onSubmit = async (data: LoginFormType) => {
    await updateData(data);
    login.mutate(data, {
      onError: (axiosError) => {
        setError(axiosError.message);
        throw new Error(axiosError.message);
      },
    });
  };

  const [checked, setChecked] = useState(true);

  const handleResetPass = () => {
    router.push(`/(${space})/(public)/reset-password`);
  };

  return {
    onSubmit,
    handleSubmit,
    control,
    handleResetPass,
    checked,
    setChecked,
    error,
    formData,
    setFormData,
  };
};
