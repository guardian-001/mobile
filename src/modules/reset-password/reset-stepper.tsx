import * as React from 'react';
import { Platform } from 'react-native';

import { type TxKeyPath, useRouteName } from '@/core';
import {
  HeaderTitle,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Text,
} from '@/shared/components';
import {
  FormProvider,
  useFormStepper,
} from '@/shared/providers/use-form-stepper-provider';
import type { ResetPassFormType } from '@/types';

import ResetFormEmail from './reset-form-email';
import ResetFormPassword from './reset-form-password';
import VerificationCode from './verification-code';

function ResetStepperInner() {
  const { step } = useFormStepper<ResetPassFormType>();
  const space = useRouteName();
  const stepsContent: {
    title: TxKeyPath;
    subtitle: TxKeyPath;
    component: React.ReactNode;
  }[] = [
    {
      title: 'resetpass.forgetPasswordTitle',
      subtitle: 'resetpass.sendingEmailDescription',
      component: <ResetFormEmail />,
    },
    {
      title: 'resetpass.verificationCodeTitle',
      subtitle: 'resetpass.verificationCodeDescription',
      component: <VerificationCode />,
    },
    {
      title: 'resetpass.resetPasswordTitle',
      subtitle: 'resetpass.resetPasswordDescription',
      component: <ResetFormPassword />,
    },
  ];
  const { title, subtitle, component } = stepsContent[step];
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 bg-white dark:bg-black"
    >
      <HeaderTitle text="resetpass.reset" type="default" />

      <ScrollView
        className="flex-1 p-6 pt-12"
        contentContainerClassName={`${step === 1 && 'items-center'}`}
      >
        {step === 1 && (
          <Image
            className="mb-6 h-24 w-44 self-center overflow-hidden"
            contentFit="cover"
            source={
              space === 'client'
                ? require('@/assets/images/code-verification-blue.png')
                : require('@/assets/images/code-verification-red.png')
            }
          />
        )}
        <Text tx={title} className="mb-2 text-2xl font-extrabold" />
        <Text tx={subtitle} className="text-base text-description" />
        {component}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default function ResetStepper() {
  const initialData = {
    email: '',
    password: '',
    confirmPassword: '',
  };
  return (
    <FormProvider<ResetPassFormType> initialData={initialData}>
      <ResetStepperInner />
    </FormProvider>
  );
}
