import React from 'react';
import { FlatList } from 'react-native';

import { Heart, Location, Map, Send } from '@/assets/icons';
import { translate } from '@/core';
import { Button, Image, ImageContainer, Text, View } from '@/shared/components';

import { useProjectItem } from '../hooks/use-project-item';
import type { ProjectItemProps } from '../types';
import { IconDisplay } from './icon-display';
import { TagProject } from './tag';

export const ProjectItem = React.memo(({ item }: ProjectItemProps) => {
  const { snapToOffsets, renderItem, handleScroll, currentIndex, totalImages } =
    useProjectItem({ item });
  return (
    <View className="relative flex-1">
      <ImageContainer className="h-screen w-screen">
        <FlatList
          data={item?.projectImages ?? []}
          renderItem={renderItem}
          keyExtractor={(imageUrl, index) => index.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          snapToOffsets={snapToOffsets}
          onScroll={handleScroll}
          scrollEventThrottle={16}
        />
        <View className="absolute right-0 top-0 mr-4 mt-10 w-16 rounded-3xl bg-black/50 p-2">
          <Text className="text-center text-xs text-white">
            {`${currentIndex + 1}/${totalImages}`}
          </Text>
        </View>
      </ImageContainer>
      <View className="absolute bottom-0 mb-10 w-4/5 pl-3">
        <View className="flex flex-row items-center gap-2">
          <Image
            source={require('@/assets/images/architecteImage.jpg')}
            className="h-12 w-12 rounded-full"
            contentFit="cover"
          />
          <Text className="text-sm font-extrabold text-white">
            {item?.architectName}
          </Text>
        </View>
        <Button
          label={translate('inspiration.launchYourProject')}
          onPress={() => {}}
          textClassName="text-sm"
          className="my-4 h-9 w-[55%] rounded"
        />
        <View className="flex flex-row items-center gap-4 pl-2">
          <Text className="text-sm font-bold text-white">
            {item?.propertyType}
          </Text>
          <Text className="text-xs text-white">{item?.publishedDate}</Text>
        </View>
        <Text className="my-3 pl-2 text-xs text-white">
          {item?.description}
        </Text>
        <View className="mb-8 flex flex-row items-center gap-2">
          <TagProject label={item?.city ?? ''} SvgComponent={Location} />
          <TagProject label={item?.terrainSurface ?? ''} SvgComponent={Map} />
        </View>
      </View>
      <View className="absolute inset-y-0 right-0 mb-10 h-3/4 w-1/6 items-center justify-end gap-4">
        <Image
          source={require('@/assets/images/architecteImage.jpg')}
          className="h-12 w-12 rounded-full"
          contentFit="cover"
        />
        <IconDisplay SvgComponent={Heart} count="32" onPress={() => {}} />
        <IconDisplay SvgComponent={Send} count="5" onPress={() => {}} />
      </View>
    </View>
  );
});
