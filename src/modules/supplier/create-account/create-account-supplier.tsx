import * as React from 'react';
import { View } from 'react-native';

import { FormProvider, useFormStepper } from '@/shared';
import { HeaderTitle } from '@/shared/components';

import { stepsContent } from './steps-content';
import type { FirstConnectionType } from './types';

export function CreateAccountStepperInner() {
  const { step } = useFormStepper<FirstConnectionType>();
  const { component } = stepsContent[step];

  return (
    <View className="items-between flex h-full bg-background">
      <HeaderTitle text="signup.headerTitle" type="custom" />
      <View className=" h-full flex-1 p-6">{component}</View>
    </View>
  );
}

export default function CreateAccountStepper() {
  const initialData = {
    companyName: '',
    phoneNumber: '',
    companySpeciality: '',
    companyAddress: '',
    specialityType: [],
    appearance: 'default',
    email: '',
  };

  return (
    <FormProvider<FirstConnectionType> initialData={initialData} maxStep={3}>
      <CreateAccountStepperInner />
    </FormProvider>
  );
}
