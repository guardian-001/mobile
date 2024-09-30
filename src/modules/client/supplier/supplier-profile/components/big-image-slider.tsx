import React from 'react';
import { FlatList, View } from 'react-native';

import { useImagesProductSlider } from '../hooks/use-image-slider';

export default function BigImageSlider({ images }: { images: string[] }) {
  const { snapToOffsets, renderItem, handleScroll, currentIndex, totalImages } =
    useImagesProductSlider({ images });

  return (
    <View className=" min-h-60 w-full ">
      <FlatList
        data={images}
        horizontal={true}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        snapToOffsets={snapToOffsets}
        scrollEventThrottle={16}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
      />
      <View className="mt-2 flex-row justify-center">
        {Array.from({ length: totalImages }).map((_, index) => (
          <View
            key={index}
            className={`mx-1 h-2 w-2 rounded-full ${
              index === currentIndex ? 'bg-black' : 'bg-gray-300'
            }`}
          />
        ))}
      </View>
      <View className="my-2 h-[0.5px] w-full bg-color-shadow" />
    </View>
  );
}
