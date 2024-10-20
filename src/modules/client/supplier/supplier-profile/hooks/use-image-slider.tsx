import { useCallback, useState } from 'react';
import type { NativeScrollEvent, NativeSyntheticEvent } from 'react-native';

import { Image } from '@/shared/components';
import { WIDTH } from '@/shared/utils';

export type ImagesProducProps = { images?: string[] };

export const useImagesProductSlider = ({ images }: ImagesProducProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / WIDTH);
    setCurrentIndex(index);
  };
  const snapToOffsets = images?.map((_, index) => index * WIDTH) ?? [];
  const totalImages = images?.length ?? 0;

  const renderItem = useCallback(
    ({ item }: { item: string }) => (
      <Image
        source={{ uri: item }}
        className="h-60"
        style={{ width: WIDTH - 16 }}
        contentFit="contain"
      />
    ),
    []
  );

  return {
    snapToOffsets,
    renderItem,
    handleScroll,
    currentIndex,
    totalImages,
  };
};
