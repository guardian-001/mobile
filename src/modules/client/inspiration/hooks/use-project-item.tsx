import { useRouter } from 'expo-router';
import React, { useCallback } from 'react';
import type { ListRenderItemInfo } from 'react-native';

import { useImageSlider } from '@/core';
import { Image } from '@/shared/components';

import type { ProjectItemProps } from '../types';

export const useProjectItem = ({ item }: ProjectItemProps) => {
  const { handleScroll, currentIndex, snapToOffsets, totalImages } =
    useImageSlider(item?.projectImages);

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<string>) => (
      <Image source={{ uri: item }} className="h-screen w-screen" />
    ),
    []
  );

  const router = useRouter();
  const navigateToProfile = () => {
    router.push('(client)/(private)/(architect-profile)/profile');
  };
  return {
    snapToOffsets,
    renderItem,
    handleScroll,
    currentIndex,
    totalImages,
    navigateToProfile,
  };
};
