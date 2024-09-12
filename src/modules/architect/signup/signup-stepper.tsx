import React from 'react';
import { Platform } from 'react-native';

import { KeyboardAvoidingView, View } from '@/shared/components';
import {
  FormProvider,
  useFormStepper,
} from '@/shared/providers/use-form-stepper-provider';
import { formatDateBackend } from '@/shared/utils';

import type { SignupFormDataType } from './shared/types';
import { stepsContent } from './steps-content';

const SignupStepperInner = () => {
  const { step } = useFormStepper<SignupFormDataType>();

  const { component } = stepsContent[step];

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="items-between flex  w-full  bg-background  "
      >
        <View className=" flex h-full  ">{component}</View>
      </KeyboardAvoidingView>
    </>
  );
};

export default function SignupStepper() {
  const initialData = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    city: '',
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
