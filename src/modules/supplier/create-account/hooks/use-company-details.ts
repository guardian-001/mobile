import { useRouter } from 'expo-router';

import { useCustomForm } from '@/core';
import { useFormStepper } from '@/shared';
import { error } from '@/theme/colors';

import { DetailsSchema } from '../schemas/create-account-schemas';
import type { DetailsType, FirstConnectionType } from '../types';

export const useDetails = () => {
  const router = useRouter();

  const { formData, setFormData, onHandleNext } =
    useFormStepper<FirstConnectionType>();

  const { handleSubmit, control } = useCustomForm(DetailsSchema, {
    companyName: formData.companyName,
    companySpeciality: formData.companyName,
    phoneNumber: formData.phoneNumber,
    companyAddress: formData.companyAddress,
  });

  const onSubmit = (selectedData: DetailsType) => {
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
