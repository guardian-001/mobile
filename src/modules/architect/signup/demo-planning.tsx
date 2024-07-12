import React from 'react';

import { StepButtons } from '@/modules/shared';
import { Text, View } from '@/shared/components';
import Calendar from '@/shared/components/calendar';

export type ResetFormProps = {
  handlePreviousStep?: () => void;
  handleNextStep?: () => void;
};

export default function DemoPlanning({
  handlePreviousStep,
  handleNextStep,
}: ResetFormProps) {
  return (
    <View className="flex h-fit w-full items-center justify-between gap-16">
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

      <View className=" flex h-fit w-4/5 gap-5 rounded-3xl bg-white px-3 py-5 shadow-md">
        <View className="flex-1 items-center justify-center" />
        <Calendar />
        {/* <TimePicker/> */}
        <Text>epfzefojze</Text>
      </View>
      <StepButtons
        previous={{ handlePreviousStep, label: 'signup.retour' }}
        next={{ handleNextStep, label: 'signup.suivant' }}
      />
    </View>
  );
}
