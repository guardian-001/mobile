import { useWorkTypeApi } from '@/api/client';
import type { TxKeyPath } from '@/core';
import { useCustomForm } from '@/core';
import { useFormStepper } from '@/shared';
import type { AnnouncementType } from '@/types/announcement';

import { CreateAnnouncementStepFiveSchema } from '../schemas';
import type { workTypeFormType } from '../types';

export const useWorkType = () => {
  const { onHandleBack, onHandleNext, setFormData, formData } =
    useFormStepper<AnnouncementType>();
  const { handleSubmit, control, errors } = useCustomForm(
    CreateAnnouncementStepFiveSchema,
    { workType: formData?.workType }
  );
  const error = errors?.workType?.message as TxKeyPath | undefined;
  const {
    data: workTypeData,
    isError,
    isLoading,
  } = useWorkTypeApi({
    variables: { propertyType: formData.propertyType },
  });
  const onSubmit = (data: workTypeFormType) => {
    setFormData((prev: any) => ({
      ...prev,
      ...data,
    }));
    onHandleNext();
  };

  const onRollBack = () => {
    formData.workType = 0;
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
    workTypeData,
    isError,
    isLoading,
  };
};
