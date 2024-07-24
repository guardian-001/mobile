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

  const onSubmit = (data: piecesRenovateFormType) => {
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
    onSubmit,
  };
};
