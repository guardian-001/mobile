import { useLocalSearchParams } from 'expo-router';
import { useMemo } from 'react';

import { useGetCollectionByIdApi } from '@/api/supplier/catalogue/use-get-collection-by-id';
import { useCustomForm } from '@/core';
import { SearchSchema } from '@/shared/validations';

import { useAddProduct } from '../../catalogue/hooks/use-add-product';

export const useEditCollection = () => {
  const { collectionId } = useLocalSearchParams();
  const id = Array.isArray(collectionId) ? collectionId[0] : collectionId;

  const { handleSubmit, control, watch } = useCustomForm(SearchSchema);
  const {
    data: collection,
    isError,
    isLoading,
    isSuccess,
    refetch,
  } = useGetCollectionByIdApi({ variables: id });
  const { reset, ref, present } = useAddProduct(id);
  const searchValue = watch('search');
  const products = useMemo(() => {
    const productsData = collection?.products || [];
    if (!productsData) return [];
    return productsData.filter((item) => {
      const matchesSearch =
        !searchValue ||
        item.name.toLowerCase().includes(searchValue.toLowerCase());
      return matchesSearch;
    });
  }, [searchValue, collection]);
  return {
    collection,
    products,
    handleSubmit,
    control,
    isError,
    isLoading,
    isSuccess,
    refetch,
    reset,
    ref,
    present,
  };
};
