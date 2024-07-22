import React from 'react';

import { translate } from '@/core';
import { StepperButton } from '@/modules/shared';
import { View } from '@/shared/components';
import type { StepperFormProps } from '@/types';
export function ChooseWorkType({
  onHandleBack,
  onHandleNext,
}: StepperFormProps) {
  return (
    <View className="flex flex-1 items-center justify-between pt-8">
      <View className="h-3/4" />
      <View className="flex flex-row">
        <StepperButton
          width="w-[45%]"
          onPressHandler={onHandleBack}
          label={translate('signup.retour')}
        />
        <StepperButton
          width="w-[45%]"
          onPressHandler={onHandleNext}
          label={translate('signup.suivant')}
        />
      </View>
    </View>
  );
}
