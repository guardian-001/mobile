import { useState } from 'react';
import type { NativeScrollEvent, NativeSyntheticEvent } from 'react-native';

import type { RealizationImage } from '@/api/architect/project';

import { WIDTH } from '../utils';

export const useImageSlider = (projectImages?: RealizationImage[]) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / WIDTH);
    setCurrentIndex(index);
  };

  const snapToOffsets = projectImages?.map((_, index) => index * WIDTH) ?? [];
  const totalImages = projectImages?.length ?? 0;

  return {
    handleScroll,
    currentIndex,
    snapToOffsets,
    totalImages,
  };
};
