import React from 'react';
import { FlatList } from 'react-native';

import { Image, Text, View } from '@/shared/components';

import { useProject } from '../hooks';

export default function Gallery() {
  const { formData } = useProject();
  return (
    <View className="my-10 ">
      <Text
        tx={'realisation.galleryStep.title'}
        className="mb-2 text-start text-2xl  font-extrabold"
      />
      <FlatList
        data={formData.projectImages}
        renderItem={({ item }) => {
          return (
            <Image
              className="w-96"
              source={{ uri: item.uri }}
              contentFit="contain"
            />
          );
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerClassName="h-60 flex gap-2 "
      />
    </View>
  );
}
