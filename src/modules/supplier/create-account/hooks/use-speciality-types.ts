import { useSpecialityTypesApi } from '@/api/supplier/createAccount/use-speciality-types';
import { useCustomForm } from '@/core';
import { useFormStepper } from '@/shared';
import { error } from '@/theme/colors';
import type { TagType } from '@/types';

import { specialityTypeSchema } from '../schemas/create-account-schemas';
import type { FirstConnectionType, SpecialityType } from '../types';

export const useSpecialityTypes = () => {
  const { formData, setFormData, onHandleNext, onHandleBack } =
    useFormStepper<FirstConnectionType>();

  const { handleSubmit, control } = useCustomForm(specialityTypeSchema, {
    specialityType: formData.specialityType,
  });
  const { data, isPending, isError } = useSpecialityTypesApi();
  const specialityTypesData: TagType[] =
    data?.map((type) => {
      return { value: type.content, displayName: type.label };
    }) || [];

  const onSubmit = (selectedData: SpecialityType) => {
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
    specialityTypesData,
  };
};
