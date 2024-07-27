import { useEffect } from 'react';

import { useRoomsToRenovateApi } from '@/api/client';
import { useCustomForm } from '@/core';
import { useFormStepper } from '@/shared';
import type { AnnouncementType } from '@/types/announcement';

import { CreateAnnouncementStepSixSchema } from '../schemas';
import type { piecesRenovateFormType } from '../types';

export const useRoomsToRenovate = () => {
  const { onHandleBack, onHandleNext, setFormData, formData } =
    useFormStepper<AnnouncementType>();

  const { handleSubmit, control } = useCustomForm(
    CreateAnnouncementStepSixSchema,
    { piecesRenovate: formData?.piecesRenovate }
  );

  const { data, isError, isLoading, isFetchedAfterMount } =
    useRoomsToRenovateApi({
      variables: {
        propertyType: formData.propertyType,
        workType: formData.workType,
      },
    });
  const RenovateData = data?.data || [];
  const eliminateStep = data?.eliminateStep;
  const newConstruction = data?.newConstruction;

  useEffect(() => {
    if (isFetchedAfterMount) {
      if (eliminateStep && !formData.rollback) {
        formData.newConstruction = newConstruction;
        onHandleNext();
      }
      if (eliminateStep && formData.rollback) {
        onHandleBack();
      }
    }
  }, [
    isFetchedAfterMount,
    eliminateStep,
    formData,
    formData.newConstruction,
    newConstruction,
    formData.rollback,
    onHandleNext,
    onHandleBack,
  ]);

  const onSubmit = (data: piecesRenovateFormType) => {
    setFormData((prev: any) => ({
      ...prev,
      ...data,
    }));
    onHandleNext();
  };
  const onRollBack = () => {
    formData.needs = [];
    onHandleBack();
  };

  return {
    onRollBack,
    onHandleNext,
    setFormData,
    formData,
    handleSubmit,
    control,
    onSubmit,
    RenovateData,
    isError,
    isLoading,
    eliminateStep,
    newConstruction,
    isFetchedAfterMount,
  };
};
