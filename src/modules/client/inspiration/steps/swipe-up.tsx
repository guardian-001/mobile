import React from 'react';

import { translate } from '@/core';
import { StepperButton } from '@/modules/shared';
import { Text, View } from '@/shared/components';

import { useSwipeUp } from '../hooks/use-swipe-up';

export function SwipeUp() {
  const { onSubmit } = useSwipeUp();
  return (
    <View className="min-h-full flex-1 p-4 pt-8">
      <Text tx="inspiration.swipeUpTitle" className="mb-2 text-3xl font-bold" />
      <Text
        tx="inspiration.swipeUpSubtitle"
        className="text-xl text-description"
      />
      <StepperButton
        onPressHandler={onSubmit}
        label={translate('common.next')}
      />
    </View>
  );
}
