import { useRouter } from 'expo-router';
import React, { useCallback } from 'react';

import type { RealizationImage } from '@/api/architect/project';
import { useImageSlider } from '@/core';
import { Image, WIDTH } from '@/shared/components';

import type { ProjectItemProps } from '../../types';

export const useProjectItem = ({ item }: ProjectItemProps) => {
  const { handleScroll, currentIndex, snapToOffsets, totalImages } =
    useImageSlider(item?.realizationImages);

  const renderItem = useCallback(
    ({ item }: { item: RealizationImage }) => (
      <Image
        source={{ uri: item.image }}
        className="h-96"
        style={{ width: WIDTH - 16 }}
        contentFit="contain"
      />
    ),
    []
  );

  const router = useRouter();
  const navigateToProjectDetails = () => {
    router.push({
      pathname: '(client)/(private)/(architect-profile)/project',
      params: { projectData: item?.id },
    });
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
