import { useCustomForm } from '@/core';
import { useFormStepper } from '@/shared';
import type { AnnouncementType } from '@/types/announcement';

import { CreateAnnouncementStepSevenSchema } from '../schemas';
import type { AreaDetailsFormType } from '../types';

export const useAreaDetails = () => {
  const { onHandleBack, onHandleNext, setFormData, formData } =
    useFormStepper<AnnouncementType>();
  const { handleSubmit, control } = useCustomForm(
    CreateAnnouncementStepSevenSchema,
    {
      address: formData?.address,
      city: formData?.city,
      terrainSurface: formData?.terrainSurface,
      workSurface: formData?.workSurface,
    }
  );

  const onSubmit = (data: AreaDetailsFormType) => {
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
