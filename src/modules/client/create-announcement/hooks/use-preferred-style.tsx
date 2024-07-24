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

  const onSubmit = (data: architecturalStyleFormType) => {
    setFormData((prev: any) => ({
      ...prev,
      ...data,
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
  };
};
