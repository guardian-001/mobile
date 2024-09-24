import React from 'react';
import { FlatList } from 'react-native';

import { ArrowRightLong } from '@/assets/icons/long-arrow-right';
import { Button, ImageContainer, Text, View } from '@/shared/components';

import type { ProjectItemProps } from '../../types';
import { useProjectItem } from '../hooks/use-project-item';

export const ProjectItem = React.memo(({ item }: ProjectItemProps) => {
  const {
    snapToOffsets,
    renderItem,
    handleScroll,
    currentIndex,
    totalImages,
    navigateToProjectDetails,
  } = useProjectItem({ item });
  return (
    <View className="mb-2 flex-1">
      <ImageContainer className="h-96 w-full">
        <FlatList
          data={item?.realizationImages ?? []}
          renderItem={renderItem}
          keyExtractor={(imageUrl, index) => index.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          snapToOffsets={snapToOffsets}
          scrollEventThrottle={2}
        />
        <View className="absolute inset-x-0 bottom-0 flex-row justify-center pb-3">
          {Array.from({ length: totalImages }).map((_, index) => (
            <View
              key={index}
              className={`mx-1 h-2 w-2 rounded-full ${
                index === currentIndex ? 'bg-white' : 'bg-background/30'
              }`}
            />
          ))}
        </View>
      </ImageContainer>
      <View className="flex flex-1 flex-row items-center">
        <Text className="flex-1 text-sm font-semibold">
          {item?.projectCategory.label}
        </Text>
        <Button
          icon={<ArrowRightLong />}
          onPress={navigateToProjectDetails}
          className=" h-8 w-8 rounded-full !bg-light-blue !px-0"
        />
      </View>
    </View>
  );
});
