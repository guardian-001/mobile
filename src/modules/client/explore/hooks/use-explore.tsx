import { useRouter } from 'expo-router';

import { useCategoriesApi, usePropertyTypesApi } from '@/api/client';
import { useCustomForm } from '@/core';
import { getStatus } from '@/core/auth/utils';

import { ProjectCategorySchema } from '../schema/project-category-schema';

export const useExplore = () => {
  const router = useRouter();
  const status = getStatus();
  const {
    data: CategoryData,
    isError: isErrorCategory,
    isLoading: isLoadingCategory,
    isSuccess: isSuccessCategory,
  } = useCategoriesApi();
  const { control, watch } = useCustomForm(ProjectCategorySchema, {
    projectCategory: 'Projet résidentiel',
  });
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
    router,
    status,
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
