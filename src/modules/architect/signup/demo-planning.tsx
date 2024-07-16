import React from 'react';

import { StepButtons } from '@/modules/shared';
import { ScrollView, Text, View } from '@/shared/components';
import { Calendar } from '@/shared/components';
import { useCustomForm } from '@/shared/hooks';
import { SignupFormSchema } from '@/validations';

export type ResetFormProps = {
  handlePreviousStep?: () => void;
  handleNextStep?: () => void;
};

export default function DemoPlanning({
  handlePreviousStep,
  handleNextStep,
}: ResetFormProps) {
  const { setValue } = useCustomForm(SignupFormSchema);

  const handleDateSelect = (date: Date) => {
    setValue('demoDate', date);
  };

  // const handleTimeSelect = (time: string) => {
  //   setValue('demoTime', time);
  // };

  return (
    <ScrollView
      className="h-fit w-full"
      contentContainerStyle={{
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
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
      <View className="my-5 flex h-fit w-4/5 rounded-3xl bg-white px-3 py-5 shadow-md">
        <Calendar
          onDateSelect={handleDateSelect}
          // onTimeSelect={handleTimeSelect}
        />
      </View>
      <StepButtons
        previous={{ handlePreviousStep, label: 'signup.retour' }}
        next={{ handleNextStep, label: 'signup.suivant' }}
      />
    </ScrollView>
  );
}
