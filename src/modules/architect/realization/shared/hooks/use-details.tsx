import type { TxKeyPath } from '@/core';
import { useCustomForm } from '@/core';
import { ProjectDetailsSchema } from '@/modules/architect/shared/schemas';
import { useFormStepper } from '@/shared';

import type { ProjectRealizationType } from '../types';

export const useDetails = () => {
  type DetailsFormType = Pick<
    ProjectRealizationType,
    'projectName' | 'city' | 'workSurface' | 'description'
  >;
  const { formData, setFormData, onHandleNext, onHandleBack } =
    useFormStepper<ProjectRealizationType>();
  const { handleSubmit, control, errors } = useCustomForm(
    ProjectDetailsSchema,
    {
      projectName: formData?.projectName,
      city: formData?.city,
      workSurface: formData?.workSurface,
      description: formData?.description,
    }
  );

  const onSubmit = (data: DetailsFormType) => {
    setFormData((prev: ProjectRealizationType) => ({
      ...prev,
      ...data,
    }));
    onHandleNext();
  };

  const errorCity = errors.city?.message as TxKeyPath | undefined;
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
  };
};
