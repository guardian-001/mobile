import React from 'react';

import { translate } from '@/core';
import StepperButton from '@/modules/shared/stepper-button';
import { ScrollView, Text, View } from '@/shared/components';
export type ResetFormProps = {
  onSubmit?: () => void;
};

export default function DemoPlanning({ onSubmit }: ResetFormProps) {
  return (
    <View className="flex h-fit items-center justify-between gap-16">
      <View>
        <Text
          tx={'signupStep3.title'}
          className="mb-2 text-center text-2xl font-extrabold"
        />
        <Text
          tx={'signupStep3.description'}
          className="max-w-xs text-center text-sm text-description"
        />
      </View>

      <ScrollView className=" flex h-fit gap-5" />
      <View className="flex flex-row  gap-2">
        <StepperButton
          width="w-[45%]"
          alternativeBg="bg-secondary-btn"
          alternativeTextStyle="color-primary-txt"
          label={translate('signup.retour')}
        />

        <StepperButton
          width="w-[45%]"
          onPressHandler={onSubmit}
          label={translate('signup.suivant')}
        />
      </View>
    </View>
  );
}
