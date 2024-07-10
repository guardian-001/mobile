import React from 'react';

import { translate } from '@/core';
import StepperButton from '@/modules/shared/stepper-button';
import { ScrollView, Text, View } from '@/shared/components';
export type ResetFormProps = {
  handleConfirmationStep?: () => void;
};

export default function DemoPlanningConfirmation({
  handleConfirmationStep,
}: ResetFormProps) {
  return (
    <View className="flex h-fit items-center justify-between gap-16">
      <View>
        <Text
          tx={'signupStepDemoPlanningConfirmation.title'}
          className="mb-2 text-center text-2xl font-extrabold"
        />
        <Text
          tx={'signupStepDemoPlanningConfirmation.description'}
          className="max-w-xs text-center text-sm text-description"
        />
      </View>

      <ScrollView className=" flex h-fit gap-5" />
      <StepperButton
        width="w-[45%]"
        alternativeBg="bg-secondary-btn"
        alternativeTextStyle="color-primary-txt"
        label={translate('signupStepDemoPlanningConfirmation.confirmBtn')}
        onPressHandler={handleConfirmationStep}
      />
    </View>
  );
}
