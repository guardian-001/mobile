import { useRouter } from 'expo-router';

import { useCustomForm } from '@/core';
import { PasswordSchema } from '@/shared/validations';
import { error } from '@/theme/colors';

export const useCreatePassword = () => {
  const router = useRouter();
  const { handleSubmit, control, form } = useCustomForm(PasswordSchema, {
    password: '',
  });

  const onSubmit = () => {
    //add login here
    router.push('(supplier)/(private)/complete-account');
  };

  return {
    handleSubmit,
    control,
    error,
    onSubmit,
    form,
  };
};
