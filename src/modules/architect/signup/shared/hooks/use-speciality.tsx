import { useRouter } from 'expo-router';

import type { TxKeyPath } from '@/core';
import { useCustomForm } from '@/core';
import { useFormStepper } from '@/shared';

import { SpecialityFormSchema } from '../schemas';
import type { SignupFormDataType } from '../types';

export const useSpeciality = () => {
  const route = useRouter();

  type SpecialityFormType = Pick<SignupFormDataType, 'architectSpeciality'>;
  const { formData, setFormData, onHandleNext } =
    useFormStepper<SignupFormDataType>();
  const { handleSubmit, control, errors } = useCustomForm(
    SpecialityFormSchema,
    {
      architectSpeciality: formData.architectSpeciality,
    }
  );

  const onHandleBack = () => {
    route.push('/(architect)/(public)/login');
  };

  const onSubmit = (data: SpecialityFormType) => {
    setFormData((prev: SignupFormDataType) => ({
      ...prev,
      ...data,
    }));
    onHandleNext();
  };
  const error = errors.architectSpeciality?.message as TxKeyPath | undefined;

  return {
    formData,
    setFormData,
    onHandleNext,
    handleSubmit,
    control,
    errors,
    onHandleBack,
    onSubmit,
    error,
  };
};
