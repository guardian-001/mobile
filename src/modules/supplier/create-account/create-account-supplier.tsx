import * as React from 'react';
import { Platform } from 'react-native';

import { FormProvider, useFormStepper } from '@/shared';
import { Image, KeyboardAvoidingView, ScrollView } from '@/shared/components';
import { useRouteName } from '@/shared/hooks/use-get-route';

// Import the InterestPick component
import { stepsContent } from './steps-content';
import type { FirstConnectionType } from './types';

export function CreateAccountStepperInner() {
  const space = useRouteName();
  const { step } = useFormStepper<FirstConnectionType>();
  const { component } = stepsContent[step];

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 bg-white dark:bg-black"
    >
      <ScrollView
        className="flex-1 pt-12 "
        contentContainerClassName={`${step === 1 && 'items-center'}`}
      >
        {
          <Image
            className="mb-6 mt-20 h-24 w-44 self-center overflow-hidden"
            contentFit="cover"
            source={
              space === 'client'
                ? require('@/assets/images/code-verification-blue.png')
                : require('@/assets/images/code-verification-red.png')
            }
          />
        }
        {component}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default function CreateAccountStepper() {
  const initialData = {
    entrepriseName: '',
    specialty: '',
    phone: '',
    AdresseBureau: '',
    entrepriseCategory: 0,
  };

  return (
    <FormProvider<FirstConnectionType> initialData={initialData} maxStep={6}>
      <CreateAccountStepperInner />
    </FormProvider>
  );
}
