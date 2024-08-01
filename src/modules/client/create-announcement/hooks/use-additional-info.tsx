import { useEffect } from 'react';

import { useAdditionalInfoApi } from '@/api/client';
import type { TxKeyPath } from '@/core';
import { useCustomForm } from '@/core';
import { useFormStepper } from '@/shared';
import type { AnnouncementType } from '@/types/announcement';

import { CreateAnnouncementStepTenSchema } from '../schemas';
import type { projectExtensionsFormType } from '../types';

export const useAdditionalInfo = () => {
  const { onHandleBack, onHandleNext, setFormData, formData } =
    useFormStepper<AnnouncementType>();
  const { handleSubmit, control, errors } = useCustomForm(
    CreateAnnouncementStepTenSchema,
    { projectExtensions: formData?.projectExtensions || [] }
  );
  const error = errors?.projectExtensions?.message as TxKeyPath | undefined;
  const { data, isError, isLoading, isFetchedAfterMount, isSuccess } =
    useAdditionalInfoApi({
      variables: {
        propertyType: formData.propertyType,
        workType: formData.workType,
      },
    });
  const ExtensionsData = data?.data || [];
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
  const onSubmit = (data: projectExtensionsFormType) => {
    setFormData((prev: any) => ({
      ...prev,
      ...data,
    }));
    onHandleNext();
  };
  const onRollBack = () => {
    formData.projectExtensions = [];
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
    ExtensionsData,
    isError,
    isLoading,
    eliminateStep,
    isFetchedAfterMount,
    isSuccess,
  };
};
