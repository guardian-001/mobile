import { useRouter } from 'expo-router';

import { useCategoriesApi } from '@/api/architect/project';
import type { TxKeyPath } from '@/core';
import { useCustomForm } from '@/core';
import { useFormStepper } from '@/shared';

import { ProjectCategorySchema } from '../schemas';
import type { ProjectRealizationType } from '../types';

export const useCategory = () => {
  const router = useRouter();

  const { data, isPending, isError, isSuccess } = useCategoriesApi();

  type CategoryFormType = Pick<ProjectRealizationType, 'projectCategory'>;
  const { formData, setFormData, onHandleNext } =
    useFormStepper<ProjectRealizationType>();

  const { handleSubmit, control, errors } = useCustomForm(
    ProjectCategorySchema,
    {
      projectCategory: formData.projectCategory,
    }
  );

  const error = errors.projectCategory?.message as TxKeyPath | undefined;

  const onSubmit = (selectedData: CategoryFormType) => {
    setFormData((prev: ProjectRealizationType) => ({
      ...prev,
      ...selectedData,
    }));
    onHandleNext();
  };

  const onHandleBack = () => {
    router.back();
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
    data,
    isPending,
    isError,
    isSuccess,
  };
};
