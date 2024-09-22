import { useRouter } from 'expo-router';
import { useCallback, useMemo } from 'react';
import type { Control } from 'react-hook-form';
import { useController } from 'react-hook-form';

import { useGetCollectionsCategoriesApi } from '@/api/supplier/catalogue/use-get-categories';
import { useGetCollectionsApi } from '@/api/supplier/catalogue/use-get-collections';
import { useCustomForm } from '@/core';
import type { Option } from '@/shared/components';
import { useModal } from '@/shared/components';
import { SearchSchema } from '@/shared/validations';

import { categorySchema } from '../schema/category-schema';

export const useCollection = () => {
  const {
    data,
    isError: isErrorCollection,
    isLoading: isLoadingCollection,
    isSuccess: isSuccessCollection,
    refetch,
  } = useGetCollectionsApi();
  const router = useRouter();
  const { handleSubmit, control, watch } = useCustomForm(SearchSchema);
  const navigateTo = (id: string) => {
    router.push({
      pathname: '/(supplier)/(private)/(collection)/collection',
      params: { collectionId: id },
    });
  };
  const modal = useModal();
  const {
    data: categoryData,
    isPending,
    isError,
    isSuccess,
  } = useGetCollectionsCategoriesApi();
  const categoriesOptions = categoryData?.map((category) => ({
    icon: category.icon,
    label: category.label,
    value: category.label,
  }));
  const { control: controlCategory } = useCustomForm(categorySchema);
  const { field } = useController({
    control: controlCategory as Control<{ category: string }, any>,
    name: 'category',
  });
  const onSelect = useCallback(
    (value: string | number) => {
      field.onChange(value);
    },
    [field]
  );
  const onSelectOption = useCallback(
    (option: Option) => {
      onSelect?.(option.value);
      modal.dismiss();
    },
    [modal, onSelect]
  );
  const searchValue = watch('search');
  const selectedCategory = field.value;
  const CollectionData = useMemo(() => {
    if (!data) return [];
    return data.filter((item) => {
      const matchesSearch =
        !searchValue ||
        item.title.toLowerCase().includes(searchValue.toLowerCase());
      const matchesCategory =
        !selectedCategory ||
        item.categoryLabel
          .toLowerCase()
          .includes(selectedCategory.toLowerCase());
      return matchesSearch && matchesCategory;
    });
  }, [searchValue, data, selectedCategory]);
  return {
    navigateTo,
    handleSubmit,
    control,
    CollectionData,
    isErrorCollection,
    isLoadingCollection,
    isSuccessCollection,
    refetch,
    modal,
    categoriesOptions,
    isPending,
    isError,
    isSuccess,
    onSelectOption,
    field,
  };
};
