import React from 'react';

import { View } from '@/shared/components';

export type StepperFormProps = {
  handlePreviousStep?: () => void;
  handleNextStep?: () => void;
};

export function ChooseNeeds({}: StepperFormProps) {
  return (
    <View className="flex flex-1 items-center justify-between pt-8">
      <View className="h-3/4" />
    </View>
  );
}
