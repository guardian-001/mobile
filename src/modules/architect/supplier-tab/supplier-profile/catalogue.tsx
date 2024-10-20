import React from 'react';

import type { Collection } from '@/api/supplier/profile/types';
import { ScrollView, Tag, View } from '@/shared/components';

import ProductLittleGrid from './components/products-little-grid';
import { useCatalogue } from './hooks/use-catalogue';
import type { CatalogueProps } from './types';

export default function Catalogue({ collections }: CatalogueProps) {
  const { control, products } = useCatalogue({ collections });

  return (
    <View className="flex-1">
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerClassName="py-4 items-center"
        className="flex max-h-20 w-full"
      >
        {collections?.map((tag: Collection) => (
          <Tag
            key={tag.id}
            label={tag.title}
            name="collection"
            id={tag.id}
            control={control}
            className="flex h-12 max-w-xl flex-row items-center justify-evenly"
            obligation={true}
            idValidation={true}
          />
        ))}
      </ScrollView>
      <ProductLittleGrid items={products} />
    </View>
  );
}
