import React from 'react';

import { useSignup } from '@/api/auth/use-signup';
import { Clock } from '@/assets/icons/archimatch';
import { translate } from '@/core';
import StepperButton from '@/modules/shared/stepper-button';
import { Text, View } from '@/shared/components';
import { useFormStepper } from '@/shared/providers/use-signup-stepper-provider';
import { formatDate } from '@/shared/utils';

export default function DemoPlanningConfirmation() {
  const { formData } = useFormStepper();
  const signup = useSignup();
  const handleConfirmationStep = () => {
    console.log(formData);
    signup.mutate(formData, {
      onSuccess: (data: any) => {
        // Handle success (e.g., navigate to another screen, show a success message)
        console.log('Signup successful:', data);
      },
      onError: (error: any) => {
        // Handle error (e.g., show an error message)
        console.error('Signup error:', error.message);
      },
    });
  };
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
            <Text className="font-bold text-primary-txt">
              {formatDate(formData.date)}
            </Text>
          </View>
          <View>
            <Text className="font-bold text-description">
              {translate('labels.time')}
            </Text>
            <Text className="font-bold text-primary-txt">
              {formData.timeSlot}
              <Text className="font-bold text-description"> (GMT+1)</Text>
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
