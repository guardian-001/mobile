import React from 'react';

import type { Collection } from '@/api/supplier/profile/types';
import { ScrollView, Tag, View } from '@/shared/components';

import { useCatalogue } from './hooks/use-catalogue';
import type { CatalogueProps } from './types';

export default function Catalogue({ collections }: CatalogueProps) {
  const { control } = useCatalogue();

  return (
    <View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerClassName=" items-center"
        className="my-4 flex max-h-16 w-full"
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
    </View>
  );
}
