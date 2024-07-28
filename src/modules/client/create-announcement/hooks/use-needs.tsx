import { useNeedsApi } from '@/api/client';
import type { TxKeyPath } from '@/core';
import { useCustomForm } from '@/core';
import { useFormStepper } from '@/shared';
import type { AnnouncementType } from '@/types/announcement';

import { CreateAnnouncementStepTwoSchema } from '../schemas';
import type { needsFormType } from '../types';

export const useNeeds = () => {
  const { onHandleBack, onHandleNext, setFormData, formData } =
    useFormStepper<AnnouncementType>();

  const { handleSubmit, control, errors } = useCustomForm(
    CreateAnnouncementStepTwoSchema,
    { needs: formData?.needs || [] }
  );

  const error = errors?.needs?.message as TxKeyPath | undefined;
  const {
    data: NeedsData,
    isError,
    isLoading,
  } = useNeedsApi({
    variables: { architectSpeciality: formData.architectSpeciality },
  });
  const onSubmit = (data: needsFormType) => {
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
    error,
    onSubmit,
    NeedsData,
    isError,
    isLoading,
  };
};
