import * as React from 'react';
import { Platform } from 'react-native';

import { FormProvider, useFormStepper } from '@/shared';
import { KeyboardAvoidingView, ScrollView } from '@/shared/components';

import { stepsContent } from './steps-content';
import type { FirstConnectionType } from './types';

export function CreateAccountStepperInner() {
  const { step } = useFormStepper<FirstConnectionType>();
  const { component } = stepsContent[step];

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 bg-white "
    >
      <ScrollView
        className="flex-1 pt-12 "
        contentContainerClassName="items-center"
      >
        {component}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default function CreateAccountStepper() {
  const initialData = {
    companyName: '',
    phoneNumber: '',
    companySpeciality: '',
    companyAddress: '',
    specialityType: [],
    appearance: '',
    email: '',
  };

  return (
    <FormProvider<FirstConnectionType> initialData={initialData} maxStep={3}>
      <CreateAccountStepperInner />
    </FormProvider>
  );
}
