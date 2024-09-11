import { useRouter } from 'expo-router';
import React, { useCallback } from 'react';

import type { RealizationImage } from '@/api/architect/project';
import { useImageSlider } from '@/core';
import { Image, useModal } from '@/shared/components';
import useFormattedDate from '@/shared/hooks/use-formatted-date';

import type { ProjectItemProps } from '../types';

export const useProjectItem = ({ item }: ProjectItemProps) => {
  const { handleScroll, currentIndex, snapToOffsets, totalImages } =
    useImageSlider(item?.realizationImages || []);
  const { ref, present, dismiss } = useModal();
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
  const formattedDate = useFormattedDate(item?.createdAt ?? '');
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
    dismiss,
    ref,
    present,
    formattedDate,
  };
};
