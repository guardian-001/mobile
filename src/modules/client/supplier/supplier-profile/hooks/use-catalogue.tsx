import { useCallback } from 'react';

import type { Collection, Product } from '@/api/supplier/profile/types';
import { useCustomForm } from '@/core';

import ProductBig from '../components/product-big';
import { ProductCard } from '../components/product-card';
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
  const appearance = selectedCollection
    ? selectedCollection.appearance
    : 'Petite';
  const products = selectedCollection ? selectedCollection.products : [];
  const renderLittleProduct = useCallback(
    ({ item }: { item: Product }) => (
      <ProductCard
        imageUrl={item.productImages?.[0]?.image}
        title={item.name}
        price={item.price}
      />
    ),
    []
  );
  const renderBigProduct = useCallback(
    ({ item }: { item: Product }) => <ProductBig item={item} />,
    []
  );
  console.log(collections);
  return {
    control,
    products,
    appearance,
    renderBigProduct,
    renderLittleProduct,
  };
};
