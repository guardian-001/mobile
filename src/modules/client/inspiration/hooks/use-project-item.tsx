import { useCallback, useState } from 'react';
import type {
  ListRenderItemInfo,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import { Dimensions } from 'react-native';

import { Image } from '@/shared/components';

import { projectList } from '../dump-data';
import type { ProjectItemProps } from '../types';

export const useProjectItem = ({ item }: ProjectItemProps) => {
  const snapToOffsets = projectList.map(
    (_, index) => index * Dimensions.get('window').width
  );
  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<string>) => (
      <Image source={{ uri: item }} className="h-screen w-screen" />
    ),
    []
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = item?.projectImages?.length ?? 0;
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / Dimensions.get('window').width);
    setCurrentIndex(index);
  };
  return {
    snapToOffsets,
    renderItem,
    handleScroll,
    currentIndex,
    totalImages,
  };
};
