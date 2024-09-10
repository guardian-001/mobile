import { useRouter } from 'expo-router';
import React, { useCallback } from 'react';

import type { RealizationImage } from '@/api/architect/project';
import { useImageSlider } from '@/core';
import { Image } from '@/shared/components';

import type { ProjectItemProps } from '../types';

export const useProjectItem = ({ item }: ProjectItemProps) => {
  const { handleScroll, currentIndex, snapToOffsets, totalImages } =
    useImageSlider(item?.realizationImages || []);

  const renderItem = useCallback(
    ({ item }: { item: RealizationImage }) => (
      <Image
        source={{ uri: item.image }}
        className="h-screen w-screen"
        contentFit="contain"
      />
    ),
    []
  );

  const router = useRouter();
  const navigateToProfile = () => {
    router.push({
      pathname: '(client)/(private)/(architect-profile)/profile',
      params: { architectData: item?.architect.id },
    });
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
