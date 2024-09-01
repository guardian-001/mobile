import { useEffect } from 'react';

import { useCategoriesApi, usePropertyTypesApi } from '@/api/client';
import { useCustomForm } from '@/core';

import { ProjectCategorySchema } from '../schema/project-category-schema';

export const useExplore = () => {
  const {
    data: CategoryData,
    isError: isErrorCategory,
    isLoading: isLoadingCategory,
    isSuccess: isSuccessCategory,
  } = useCategoriesApi();
  const { control, watch, setValue } = useCustomForm(ProjectCategorySchema);

  useEffect(() => {
    if (CategoryData?.length) {
      setValue('projectCategory', CategoryData[0].label || '');
    }
  }, [CategoryData, setValue]);

  const selectedCategory: string = watch('projectCategory');
  const selectedCategoryId =
    CategoryData?.find((category) => category.label === selectedCategory)?.id ||
    1;

  const {
    data: PropertyData,
    isError: isErrorPropertyType,
    isLoading: isLoadingPropertyType,
    isSuccess: isSuccessPropertyType,
  } = usePropertyTypesApi({
    variables: { projectCategory: selectedCategoryId },
  });
  return {
    CategoryData,
    isErrorCategory,
    isLoadingCategory,
    isSuccessCategory,
    selectedCategory,
    PropertyData,
    isErrorPropertyType,
    isLoadingPropertyType,
    isSuccessPropertyType,
    control,
  };
};
