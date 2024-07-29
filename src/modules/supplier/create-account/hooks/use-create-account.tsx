import { useRouter } from 'expo-router';

import { useCustomForm } from '@/core';
import { useFormStepper } from '@/shared';
import { error } from '@/theme/colors';

import { CreateAccountSchema } from '../schemas/create-account-schemas';
import type { CreateAccountType, FirstConnectionType } from '../types';

export const useCreateAccount = () => {
  const router = useRouter();

  const { formData, setFormData, onHandleNext } =
    useFormStepper<FirstConnectionType>();

  const { handleSubmit, control } = useCustomForm(CreateAccountSchema, {
    entrepriseName: formData.entrepriseName,
    specialty: formData.entrepriseName,
    phone: formData.entrepriseName,
    AdresseBureau: formData.entrepriseName,
  });

  const onSubmit = (selectedData: CreateAccountType) => {
    setFormData((prev: FirstConnectionType) => ({
      ...prev,
      ...selectedData,
    }));
    onHandleNext();
  };

  const onHandleBack = () => {
    router.back();
  };
  return {
    onHandleBack,
    onHandleNext,
    setFormData,
    formData,
    handleSubmit,
    control,
    error,
    onSubmit,
  };
};
