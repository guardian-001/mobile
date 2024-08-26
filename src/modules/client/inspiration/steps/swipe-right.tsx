import React from 'react';

import { translate } from '@/core';
import { StepperButton } from '@/modules/shared';
import { Text, View } from '@/shared/components';

import { useSwipeRight } from '../hooks/use-swipe-right';

export function SwipeRight() {
  const {} = useSwipeRight();
  return (
    <View className="flex-1 p-4 pt-8">
      <Text
        tx="inspiration.swipeRightTitle"
        className="mb-2 text-3xl font-bold"
      />
      <Text
        tx="inspiration.swipeRightSubtitle"
        className="text-xl text-description"
      />
      <StepperButton
        onPressHandler={() => {}}
        label={translate('inspiration.startWatching')}
      />
    </View>
  );
}
