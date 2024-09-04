import { useEffect, useState } from 'react';

import { useGetCollectionsApi } from '@/api/supplier/catalogue/use-get-collections';
import { useCustomForm } from '@/core';

import { collectionIdSchema } from '../../profile/schemas/collection-schema';
import type { Collection, Product } from '../types';

export const useProfileCatalogue = () => {
  const {
    data: CollectionData,
    isError: isErrorCollection,
    isLoading: isLoadingCollection,
    isSuccess: isSuccessCollection,
    refetch,
  } = useGetCollectionsApi();

  const { control } = useCustomForm(collectionIdSchema, {
    collection: CollectionData && CollectionData[0]?.id,
  });
  const [selectedCollectionId, setSelectedCollectionId] = useState<number>();

  const [selectedCollection, setSelectedCollection] = useState<Collection>();

  const [collectionProducts, setCollectionProducts] = useState<
    Product[] | undefined
  >([]);

  useEffect(() => {
    setSelectedCollection(
      CollectionData?.filter(
        (collection) => collection.id === selectedCollectionId
      )[0]
    );
  }, [selectedCollectionId, CollectionData]);

  useEffect(() => {
    if (selectedCollectionId === undefined) {
      setSelectedCollectionId(CollectionData && CollectionData[0].id);
    }
    setCollectionProducts(
      CollectionData?.filter(
        (collection) => collection.id === selectedCollectionId
      )[0]?.products
    );
  }, [selectedCollectionId, CollectionData]);

  return {
    CollectionData,
    isErrorCollection,
    isLoadingCollection,
    isSuccessCollection,
    control,
    collectionProducts,
    refetch,
    selectedCollection,
    selectedCollectionId,
    setSelectedCollectionId,
  };
};
