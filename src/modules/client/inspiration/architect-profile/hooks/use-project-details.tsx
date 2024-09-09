import { useLocalSearchParams } from 'expo-router';
import React, { useCallback } from 'react';

import {
  type RealizationImage,
  useRealizationByIdApi,
} from '@/api/architect/project';
import { Category, Location, StyleIcon, SuperficieIcon } from '@/assets/icons';
import { useImageSlider } from '@/core';
import { Image, WIDTH } from '@/shared/components';

import type { details } from '../../types';

export const useProjectDetails = () => {
  const { projectData } = useLocalSearchParams();
  const projectId = projectData ? JSON.parse(projectData as string) : undefined;
  const {
    data: project,
    isError,
    isLoading,
    isSuccess,
  } = useRealizationByIdApi({
    variables: {
      projectId: projectId,
    },
  });
  const { handleScroll, currentIndex, snapToOffsets, totalImages } =
    useImageSlider(project?.realizationImages);

  const renderItem = useCallback(
    ({ item }: { item: RealizationImage }) => (
      <Image
        source={{ uri: item.image }}
        className="h-full"
        style={{ width: WIDTH - 16 }}
        contentFit="contain"
      />
    ),
    []
  );
  const details: details[] = [
    {
      icon: Category,
      title: 'realisation.finalStep.categorie',
      value: project?.projectCategory.label ?? '',
    },
    {
      icon: StyleIcon,
      title: 'realisation.finalStep.style',
      value: project?.architecturalStyle.label ?? '',
    },
    {
      icon: SuperficieIcon,
      title: 'realisation.finalStep.superficie',
      value: project?.workSurface ?? '',
    },
    {
      icon: Location,
      title: 'realisation.finalStep.localisation',
      value: project?.city ?? '',
    },
  ];
  return {
    snapToOffsets,
    renderItem,
    handleScroll,
    currentIndex,
    totalImages,
    details,
    project,
    isError,
    isLoading,
    isSuccess,
  };
};
