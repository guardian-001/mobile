import React from 'react';
import { FlatList, View } from 'react-native';

import { Image } from '@/shared/components';

import { useImagesProductSlider } from '../hooks/use-image-slider';

export default function ImageSlider({ images }: { images: string[] }) {
  const {
    activeIndex,
    onViewableItemsChanged,
    viewabilityConfig,
    flatListRef,
  } = useImagesProductSlider();

  return (
    <View className="h-30 mr-4 w-full">
      <FlatList
        ref={flatListRef}
        data={images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        renderItem={({ item }) => (
          <View className="flex h-28 w-44 items-center justify-center py-3">
            <Image
              source={{ uri: item }}
              className="h-h-28 w-44"
              contentFit="cover"
            />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <View className=" mt-1 flex-row justify-center">
        {images.map((_, index) => (
          <View
            key={index}
            className={`mx-1 h-2 w-2 rounded-full ${
              activeIndex === index ? 'bg-black' : 'bg-gray-300'
            }`}
          />
        ))}
      </View>
    </View>
  );
}
