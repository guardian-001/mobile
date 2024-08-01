import { useEffect } from 'react';

import { usePreferredStyleApi } from '@/api/client';
import type { TxKeyPath } from '@/core';
import { useCustomForm } from '@/core';
import { useFormStepper } from '@/shared';
import type { AnnouncementType } from '@/types/announcement';

import { CreateAnnouncementStepNineSchema } from '../schemas';
import type { architecturalStyleFormType } from '../types';

export const usePreferredStyle = () => {
  const { onHandleBack, onHandleNext, setFormData, formData } =
    useFormStepper<AnnouncementType>();

  const { handleSubmit, control, errors } = useCustomForm(
    CreateAnnouncementStepNineSchema,
    { architecturalStyle: formData?.architecturalStyle }
  );

  const error = errors?.architecturalStyle?.message as TxKeyPath | undefined;
  const { data, isError, isLoading, isFetchedAfterMount, isSuccess } =
    usePreferredStyleApi({
      variables: { propertyType: formData.propertyType },
    });
  const architecturalStyles = data?.data || [];
  const eliminateStep = data?.eliminateStep || false;

  useEffect(() => {
    if (isFetchedAfterMount) {
      if (eliminateStep && !formData.rollback) {
        onHandleNext();
      }
      if (eliminateStep && formData.rollback) {
        onHandleBack();
      }
    }
  }, [
    isFetchedAfterMount,
    eliminateStep,
    formData.rollback,
    onHandleNext,
    onHandleBack,
  ]);

  const onSubmit = (data: architecturalStyleFormType) => {
    setFormData((prev: any) => ({
      ...prev,
      ...data,
    }));
    onHandleNext();
  };
  const onRollBack = () => {
    formData.architecturalStyle = 0;
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
    architecturalStyles,
    isError,
    isLoading,
    eliminateStep,
    isFetchedAfterMount,
    isSuccess,
  };
};
