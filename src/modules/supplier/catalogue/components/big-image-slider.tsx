import React from 'react';
import { FlatList, View } from 'react-native';

import { Image } from '@/shared/components';

import { useImagesProductSlider } from '../hooks/use-image-slider';

export default function BigImageSlider({ images }: { images: string[] }) {
  const {
    activeIndex,
    onViewableItemsChanged,
    viewabilityConfig,
    flatListRef,
  } = useImagesProductSlider();

  return (
    <View className=" h-96 w-full ">
      <FlatList
        ref={flatListRef}
        data={images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        renderItem={({ item }) => {
          return (
            <View
              className={`${
                images.length === activeIndex + 1 && 'mr-4'
              }  m-2 flex h-80 w-96 items-center  justify-center p-6`}
            >
              <Image
                source={{ uri: item }}
                className=" h-full w-full"
                contentFit="contain"
              />
            </View>
          );
        }}
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
      <View className="mb-2 mt-4 h-[0.5px] w-full bg-color-shadow" />
    </View>
  );
}
