import React from 'react';
import { FlatList } from 'react-native';

import type { Collection } from '@/api/supplier/profile/types';
import { ScrollView, Tag, View } from '@/shared/components';

import { useCatalogue } from './hooks/use-catalogue';
import type { CatalogueProps } from './types';

export default function Catalogue({ collections }: CatalogueProps) {
  const {
    control,
    products,
    appearance,
    renderBigProduct,
    renderLittleProduct,
  } = useCatalogue({ collections });

  return (
    <View className="flex-1 bg-background">
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
      {appearance === 'Petite' ? (
        <FlatList
          key="small"
          data={products}
          renderItem={renderLittleProduct}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          contentContainerClassName="gap-4 items-center py-2"
          columnWrapperClassName="gap-4"
        />
      ) : (
        <FlatList
          key="large"
          data={products}
          renderItem={renderBigProduct}
          keyExtractor={(item) => item.id.toString()}
          contentContainerClassName="px-2"
        />
      )}
    </View>
  );
}
