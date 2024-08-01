import { useNeedsApi } from '@/api/architect/project/use-needs';
import type { TxKeyPath } from '@/core';
import { useCustomForm } from '@/core';
import { useFormStepper } from '@/shared';

import { NeedsSchema } from '../schemas';
import type { ProjectRealizationType } from '../types';

export const useServices = () => {
  type NeedsFormType = Pick<ProjectRealizationType, 'needs'>;
  const { formData, setFormData, onHandleNext, onHandleBack } =
    useFormStepper<ProjectRealizationType>();
  const { handleSubmit, control } = useCustomForm(NeedsSchema, {
    needs: formData.needs,
  });
  const { data, isPending, isError, error } = useNeedsApi();

  const onSubmit = (selectedData: NeedsFormType) => {
    setFormData((prev: ProjectRealizationType) => ({
      ...prev,
      ...selectedData,
    }));
    onHandleNext();
  };

  const errorApi = error?.message as TxKeyPath | undefined;
  return {
    onSubmit,
    data,
    isPending,
    isError,
    error: errorApi,
    handleSubmit,
    control,
    formData,
    setFormData,
    onHandleNext,
    onHandleBack,
  };
};
