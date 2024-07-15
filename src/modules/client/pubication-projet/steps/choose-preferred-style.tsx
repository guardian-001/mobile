import React from 'react';

import { StepButtons } from '@/modules/shared';
import { View } from '@/shared/components';

import type { StepperFormProps } from './choose-needs';

export function ChoosePreferredStyle({
  handlePreviousStep,
  handleNextStep,
}: StepperFormProps) {
  return (
    <View className="flex flex-1 items-center justify-between pt-8">
      <View className="h-3/4" />
      <StepButtons
        previous={{ handlePreviousStep, label: 'signup.retour' }}
        next={{ handleNextStep, label: 'signup.suivant' }}
      />
    </View>
  );
}
