import { useAnnouncementStep7Data } from '@/api/client';
import type { TxKeyPath } from '@/core';
import { useCustomForm } from '@/core';
import { useFormStepper } from '@/shared';

import { ProjectDetailsSchema } from '../schemas';
import type { ProjectRealizationType } from '../types';

export const useDetails = () => {
  type DetailsFormType = Pick<
    ProjectRealizationType,
    'projectName' | 'address' | 'workSurface' | 'description'
  >;
  const { formData, setFormData, onHandleNext, onHandleBack } =
    useFormStepper<ProjectRealizationType>();
  const { handleSubmit, control, errors } = useCustomForm(
    ProjectDetailsSchema,
    {
      projectName: formData?.projectName,
      city: formData?.address,
      workSurface: formData?.workSurface,
      description: formData?.description,
    }
  );
  const { data } = useAnnouncementStep7Data();
  const cities = data?.cities ?? [];
  const workSurfaces = data?.workSurfaces ?? [];
  const onSubmit = (data: DetailsFormType) => {
    setFormData((prev: ProjectRealizationType) => ({
      ...prev,
      ...data,
    }));
    onHandleNext();
  };

  const errorCity = errors.address?.message as TxKeyPath | undefined;
  const errorWorkSurface = errors.workSurface?.message as TxKeyPath | undefined;
  return {
    errorCity,
    errorWorkSurface,
    onSubmit,
    handleSubmit,
    control,
    errors,
    formData,
    setFormData,
    onHandleNext,
    onHandleBack,
    cities,
    workSurfaces,
  };
};
