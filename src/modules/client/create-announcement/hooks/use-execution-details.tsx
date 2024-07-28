import { useExecutionDetailsApi } from '@/api/client';
import type { TxKeyPath } from '@/core';
import { useCustomForm } from '@/core';
import { useFormStepper } from '@/shared';
import type { AnnouncementType } from '@/types/announcement';

import { CreateAnnouncementStepEightSchema } from '../schemas';
import type { ExecutionDetailsFormType } from '../types';

export const useExecutionDetails = () => {
  const { onHandleBack, onHandleNext, setFormData, formData } =
    useFormStepper<AnnouncementType>();
  const { handleSubmit, control, errors } = useCustomForm(
    CreateAnnouncementStepEightSchema,
    { budget: formData?.budget, description: formData?.description }
  );
  const errorBudget = errors?.budget?.message as TxKeyPath | undefined;
  const errorDescription = errors?.description?.message as
    | TxKeyPath
    | undefined;
  const { data: budgets, isError, isLoading } = useExecutionDetailsApi();

  const onSubmit = (data: ExecutionDetailsFormType) => {
    setFormData((prev: any) => ({
      ...prev,
      ...data,
    }));
    onHandleNext();
  };
  const onRollBack = () => {
    formData.budget = '';
    formData.description = '';
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
    budgets,
    errorDescription,
    errorBudget,
    isError,
    isLoading,
  };
};
