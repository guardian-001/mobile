import React from 'react';

import { StepButtons } from '@/modules/shared';
import { CalendarPicker, Text, View } from '@/shared/components';

export type ResetFormProps = {
  handlePreviousStep?: () => void;
  handleNextStep?: () => void;
};

export default function DemoPlanning({
  handlePreviousStep,
  handleNextStep,
}: ResetFormProps) {
  return (
    <View className="flex h-fit items-center justify-between gap-16">
      <View>
        <Text
          tx={'signupStepDemoPlanning.title'}
          className="mb-2 text-center text-2xl font-extrabold"
        />
        <Text
          tx={'signupStepDemoPlanning.description'}
          className="max-w-xs text-center text-sm text-description"
        />
      </View>

      <View className=" flex h-fit gap-5">
        <CalendarPicker />
      </View>
      <StepButtons
        previous={{ handlePreviousStep, label: 'signup.retour' }}
        next={{ handleNextStep, label: 'signup.suivant' }}
      />
    </View>
  );
}
