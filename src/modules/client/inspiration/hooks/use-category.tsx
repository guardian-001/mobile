import { useCategoriesApi } from '@/api/client';
import type { TxKeyPath } from '@/core';
import { useCustomForm } from '@/core';
import { useFormStepper } from '@/shared';

import { ProjectCategorySchema } from '../schema/project-category-schema';
import type { InspirationRequestType, projectCategoryFormType } from '../types';

export const useCategory = () => {
  const { onHandleNext, setFormData, formData } =
    useFormStepper<InspirationRequestType>();

  const { handleSubmit, control, errors } = useCustomForm(
    ProjectCategorySchema,
    { projectCategory: formData?.projectCategory }
  );
  const {
    data: CategoryData,
    isError,
    isLoading,
    isSuccess,
  } = useCategoriesApi();

  const error = errors?.projectCategory?.message as TxKeyPath | undefined;

  const onSubmit = (data: projectCategoryFormType) => {
    setFormData((prev: any) => ({
      ...prev,
      ...data,
    }));
    onHandleNext();
  };

  return {
    onHandleNext,
    setFormData,
    formData,
    handleSubmit,
    control,
    error,
    onSubmit,
    CategoryData,
    isError,
    isLoading,
    isSuccess,
  };
};
