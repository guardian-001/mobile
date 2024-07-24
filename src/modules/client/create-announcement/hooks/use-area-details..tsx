import type { TxKeyPath } from '@/core';
import { useCustomForm } from '@/core';
import { useFormStepper } from '@/shared';
import type { AnnouncementType } from '@/types/announcement';

import { CreateAnnouncementStepSevenSchema } from '../schemas';
import type { AreaDetailsFormType } from '../types';

export const useAreaDetails = () => {
  const { onHandleBack, onHandleNext, setFormData, formData } =
    useFormStepper<AnnouncementType>();
  const { handleSubmit, control, errors } = useCustomForm(
    CreateAnnouncementStepSevenSchema,
    {
      address: formData?.address,
      city: formData?.city,
      terrainSurface: formData?.terrainSurface,
      workSurface: formData?.workSurface,
    }
  );
  const errorCity = errors?.city?.message as TxKeyPath | undefined;
  const errorTerrainSurface = errors?.terrainSurface?.message as
    | TxKeyPath
    | undefined;
  const errorWorkSurface = errors?.workSurface?.message as
    | TxKeyPath
    | undefined;

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
    errorCity,
    errorTerrainSurface,
    errorWorkSurface,
  };
};
