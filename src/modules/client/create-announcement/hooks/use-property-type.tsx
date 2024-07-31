import { usePropertyTypesApi } from '@/api/client';
import type { TxKeyPath } from '@/core';
import { useCustomForm } from '@/core';
import { useFormStepper } from '@/shared';
import type { AnnouncementType } from '@/types/announcement';

import { CreateAnnouncementStepFourSchema } from '../schemas';
import type { propertyTypeFormType } from '../types';

export const usePropertyType = () => {
  const { onHandleBack, onHandleNext, setFormData, formData } =
    useFormStepper<AnnouncementType>();

  const { handleSubmit, control, errors } = useCustomForm(
    CreateAnnouncementStepFourSchema,
    { propertyType: formData?.propertyType }
  );
  const error = errors?.propertyType?.message as TxKeyPath | undefined;

  const {
    data: PropertyData,
    isError,
    isLoading,
    isSuccess,
  } = usePropertyTypesApi({
    variables: { projectCategory: formData.projectCategory },
  });

  const onSubmit = (data: propertyTypeFormType) => {
    setFormData((prev: any) => ({
      ...prev,
      ...data,
    }));
    onHandleNext();
  };
  const onRollBack = () => {
    formData.propertyType = 0;
    onHandleBack();
  };

  return {
    onRollBack,
    onHandleNext,
    setFormData,
    formData,
    handleSubmit,
    control,
    error,
    onSubmit,
    PropertyData,
    isError,
    isLoading,
    isSuccess,
  };
};
