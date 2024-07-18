import { useRouter } from 'expo-router';
import React from 'react';

import { translate } from '@/core';
import { StepperButton } from '@/modules/shared';
import { View } from '@/shared/components';

import type { StepperFormProps } from './choose-needs';

export function SaveProject({}: StepperFormProps) {
  const router = useRouter();
  return (
    <View className="flex flex-1 items-center justify-between pt-8">
      <View className="h-[85%]" />
      <StepperButton
        onPressHandler={() => {
          router.back();
        }}
        label={translate('announcement.buttonLabel')}
      />
    </View>
  );
}
