import { useRouter } from 'expo-router';
import React, { useCallback, useState } from 'react';
import type {
  ListRenderItemInfo,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';

import { Image, WIDTH } from '@/shared/components';

import type { ProjectItemProps } from '../../types';

export const useProjectItem = ({ item }: ProjectItemProps) => {
  const snapToOffsets = item?.projectImages.map((_, index) => index * WIDTH);
  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<string>) => (
      <Image
        source={{ uri: item }}
        className="h-96"
        style={{ width: WIDTH - 16 }}
      />
    ),
    []
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = item?.projectImages?.length ?? 0;
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / WIDTH);
    setCurrentIndex(index);
  };

  const router = useRouter();
  const navigateToProjectDetails = () => {
    router.push('(client)/(private)/(architect-profile)/project');
  };
  return {
    snapToOffsets,
    renderItem,
    handleScroll,
    currentIndex,
    totalImages,
    navigateToProjectDetails,
  };
};
