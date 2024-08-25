import { useCallback, useState } from 'react';
import type {
  ListRenderItemInfo,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';

import { Category, Location, StyleIcon, SuperficieIcon } from '@/assets/icons';
import { Image, WIDTH } from '@/shared/components';

import { projectList } from '../../dump-data';
import type { details, ProjectItemProps } from '../../types';

export const useProjectDetails = ({ item }: ProjectItemProps) => {
  const snapToOffsets = item?.projectImages.map((_, index) => index * WIDTH);
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = item?.projectImages?.length ?? 0;
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / WIDTH);
    setCurrentIndex(index);
  };

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
