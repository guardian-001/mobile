import React, { useCallback } from 'react';
import type { ListRenderItemInfo } from 'react-native';

import { Category, Location, StyleIcon, SuperficieIcon } from '@/assets/icons';
import { useImageSlider } from '@/core';
import { Image, WIDTH } from '@/shared/components';

import { projectList } from '../../dump-data';
import type { details, ProjectItemProps } from '../../types';

export const useProjectDetails = ({ item }: ProjectItemProps) => {
  const { handleScroll, currentIndex, snapToOffsets, totalImages } =
    useImageSlider(item?.projectImages);

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<string>) => (
      <Image
        source={{ uri: item }}
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
      value: projectList[0].projectCategory,
    },
    {
      icon: StyleIcon,
      title: 'realisation.finalStep.style',
      value: projectList[0].architecturalStyle,
    },
    {
      icon: SuperficieIcon,
      title: 'realisation.finalStep.superficie',
      value: projectList[0].terrainSurface,
    },
    {
      icon: Location,
      title: 'realisation.finalStep.localisation',
      value: projectList[0].city,
    },
  ];
  return {
    snapToOffsets,
    renderItem,
    handleScroll,
    currentIndex,
    totalImages,
    details,
  };
};
