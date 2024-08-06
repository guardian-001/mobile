import { useStylesApi } from '@/api/architect/project';
import type { TxKeyPath } from '@/core';
import { useCustomForm } from '@/core';
import { useFormStepper } from '@/shared';

import { ArchitecturalStyleSchema } from '../schemas';
import type { ProjectRealizationType } from '../types';

export const useStyles = () => {
  type CategoryFormType = Pick<ProjectRealizationType, 'architecturalStyle'>;
  const { formData, setFormData, onHandleNext, onHandleBack } =
    useFormStepper<ProjectRealizationType>();
  const { handleSubmit, control, errors } = useCustomForm(
    ArchitecturalStyleSchema,
    {
      architecturalStyle: formData.architecturalStyle,
    }
  );

  const { data, isPending, isError, isSuccess } = useStylesApi();

  const onSubmit = (selectedData: CategoryFormType) => {
    setFormData((prev: ProjectRealizationType) => ({
      ...prev,
      ...selectedData,
    }));
    onHandleNext();
  };

  const error = errors.architecturalStyle?.message as TxKeyPath | undefined;
  return {
    data,
    isPending,
    isError,
    error,
    onSubmit,
    handleSubmit,
    control,
    errors,
    formData,
    setFormData,
    onHandleNext,
    onHandleBack,
    isSuccess,
  };
};
