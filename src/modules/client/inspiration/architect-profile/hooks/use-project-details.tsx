import { useLocalSearchParams } from 'expo-router';
import React, { useCallback } from 'react';

import type { ProjectItem, RealizationImage } from '@/api/architect/project';
import { Category, Location, StyleIcon, SuperficieIcon } from '@/assets/icons';
import { useImageSlider } from '@/core';
import { Image, WIDTH } from '@/shared/components';

import type { details } from '../../types';

export const useProjectDetails = () => {
  const { projectDetails } = useLocalSearchParams();
  const project: ProjectItem = projectDetails
    ? JSON.parse(projectDetails as string)
    : null;
  const { handleScroll, currentIndex, snapToOffsets, totalImages } =
    useImageSlider(project?.realizationImages);

  const renderItem = useCallback(
    ({ item }: { item: RealizationImage }) => (
      <Image
        source={{ uri: item.image }}
        className="h-full"
        style={{ width: WIDTH - 16 }}
      />
    ),
    []
  );
  const details: details[] = [
    {
      icon: Category,
      title: 'realisation.finalStep.categorie',
      value: project.projectCategory.label,
    },
    {
      icon: StyleIcon,
      title: 'realisation.finalStep.style',
      value: project.architecturalStyle.label,
    },
    {
      icon: SuperficieIcon,
      title: 'realisation.finalStep.superficie',
      value: project.workSurface,
    },
    {
      icon: Location,
      title: 'realisation.finalStep.localisation',
      value: project.city,
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
  };
};
