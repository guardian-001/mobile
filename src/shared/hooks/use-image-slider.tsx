import { useState } from 'react';
import type { NativeScrollEvent, NativeSyntheticEvent } from 'react-native';

import { WIDTH } from '@/shared/components';

export const useImageSlider = (projectImages?: string[]) => {
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
