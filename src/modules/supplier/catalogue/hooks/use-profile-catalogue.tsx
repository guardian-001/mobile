import { useEffect, useState } from 'react';

import { useGetCollectionsApi } from '@/api/supplier/catalogue/use-get-collections';
import { useCustomForm } from '@/core';

import { collectionIdSchema } from '../../profile/schemas/collection-schema';
import type { Product } from '../../profile/type';

export const useProfileCatalogue = () => {
  const {
    data: CollectionData,
    isError: isErrorCollection,
    isLoading: isLoadingCollection,
    isSuccess: isSuccessCollection,
    refetch,
  } = useGetCollectionsApi();
  const { control, form } = useCustomForm(collectionIdSchema, {
    collection: 35,
  });
  const [selectedCollection, setSelectedCollection] = useState(
    form.watch('collection')
  );
  const [collectionProducts, setCollectionProducts] = useState<
    Product[] | undefined
  >([]);
  useEffect(() => {
    setSelectedCollection(form.watch('collection'));
  }, [form]);

  useEffect(() => {
    setCollectionProducts(
      CollectionData?.filter((cd) => cd.id === selectedCollection)[0].products
    );
  }, [selectedCollection, CollectionData]);

  return {
    CollectionData,
    isErrorCollection,
    isLoadingCollection,
    isSuccessCollection,
    control,
    collectionProducts,
    refetch,
  };
};
