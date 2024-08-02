import { useCategoriesApi } from '@/api/architect/project';
import { useCustomForm } from '@/core';
import { FirstConnectionSchema } from '@/modules/architect/shared/schemas';
import { useFormStepper } from '@/shared';
import { error } from '@/theme/colors';

import type { CreateAccountType, FirstConnectionType } from '../types';

export const useCreateAccount = () => {
  const { data, isPending, isError } = useCategoriesApi();

  const { formData, setFormData, onHandleNext, onHandleBack } =
    useFormStepper<FirstConnectionType>();

  const { handleSubmit, control } = useCustomForm(FirstConnectionSchema, {
    entrepriseCategory: formData.entrepriseCategory,
  });

  const onSubmit = (selectedData: CreateAccountType) => {
    setFormData((prev: FirstConnectionType) => ({
      ...prev,
      ...selectedData,
    }));
    onHandleNext();
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
    data,
    isPending,
    isError,
  };
};
