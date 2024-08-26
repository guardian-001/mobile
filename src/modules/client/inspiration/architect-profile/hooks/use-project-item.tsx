import { useRouter } from 'expo-router';
import React, { useCallback } from 'react';
import type { ListRenderItemInfo } from 'react-native';

import { useImageSlider } from '@/core';
import { Image, WIDTH } from '@/shared/components';

import type { ProjectItemProps } from '../../types';

export const useProjectItem = ({ item }: ProjectItemProps) => {
  const { handleScroll, currentIndex, snapToOffsets, totalImages } =
    useImageSlider(item?.projectImages);

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
