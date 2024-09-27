import type { Collection } from '@/api/supplier/profile/types';
import { useCustomForm } from '@/core';

import { collectionIdSchema } from '../schema/collection-schema';
import type { CatalogueProps } from '../types';

export const useCatalogue = ({ collections }: CatalogueProps) => {
  const { control, watch } = useCustomForm(collectionIdSchema, {
    collection: collections?.[0]?.id,
  });
  const selectedCollectionId: number = watch('collection');
  const selectedCollection: Collection | undefined = collections.find(
    (collection) => collection.id === selectedCollectionId
  );

  const products = selectedCollection ? selectedCollection.products : [];
  return {
    control,
    products,
  };
};
