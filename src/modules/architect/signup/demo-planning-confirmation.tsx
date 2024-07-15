import React from 'react';

import { Clock } from '@/assets/icons/archimatch';
import { translate } from '@/core';
import StepperButton from '@/modules/shared/stepper-button';
import { Text, View } from '@/shared/components';
export type ResetFormProps = {
  handleConfirmationStep?: () => void;
};

export default function DemoPlanningConfirmation({
  handleConfirmationStep,
}: ResetFormProps) {
  return (
    <View className="flex h-fit w-full items-center justify-between gap-16">
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

      <View className="flex h-fit w-full items-center justify-center gap-5">
        <Clock />
        <View className="flex h-fit w-4/5 flex-row items-center justify-between rounded-xl bg-white p-4 shadow-md">
          <View>
            <Text className="font-bold text-description">
              {translate('labels.date')}
            </Text>
            <Text className="font-bold text-primary-txt">18 january 2025</Text>
          </View>
          <View>
            <Text className="font-bold text-description">
              {translate('labels.time')}
            </Text>
            <Text className="font-bold text-primary-txt">
              14:00-14:30{' '}
              <Text className="font-bold text-description">(GMT+1)</Text>
            </Text>
          </View>
        </View>
      </View>
      <StepperButton
        width="w-[80%]"
        alternativeBg="bg-primary"
        alternativeTextStyle="color-white"
        label={translate('signupStepDemoPlanningConfirmation.confirmBtn')}
        onPressHandler={handleConfirmationStep}
      />
    </View>
  );
}
