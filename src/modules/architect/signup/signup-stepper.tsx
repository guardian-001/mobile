import React from 'react';

import { HeaderTitle, View } from '@/shared/components';
import {
  FormProvider,
  useFormStepper,
} from '@/shared/providers/use-form-stepper-provider';
import { formatDateBackend } from '@/shared/utils';

import type { SignupFormDataType } from '../shared/types';
import { stepsContent } from './steps-content';

const SignupStepperInner = () => {
  const { step } = useFormStepper<SignupFormDataType>();

  const { component } = stepsContent[step];

  return (
    <View className="items-between flex h-full bg-background">
      <HeaderTitle text="signup.headerTitle" type="custom" />
      <View className=" h-full flex-1 p-6">{component}</View>
    </View>
  );
};

export default function SignupStepper() {
  const initialData = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    architectIdentifier: '',
    architectSpeciality: 0,
    date: formatDateBackend(new Date()),
    timeSlot: '08:00',
  };

  return (
    <FormProvider<SignupFormDataType> initialData={initialData}>
      <SignupStepperInner />
    </FormProvider>
  );
}
