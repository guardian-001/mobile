import { useRef, useState } from 'react';
import type { FlatList } from 'react-native';

export const useImagesProductSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index || 0);
    }
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  return {
    activeIndex,
    onViewableItemsChanged,
    viewabilityConfig,
    flatListRef,
  };
};
