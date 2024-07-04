import { router } from 'expo-router';
import * as React from 'react';

import type { TxKeyPath } from '@/core';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
} from '@/shared/components';
import { useRouteName } from '@/shared/hooks/use-get-route';

import ResetFormEmail from './reset-form-email';
import ResetFormPassword from './reset-form-password';
import VerificationCode from './verification-code';

type Props = {};
export default function ResetStepper({}: Props) {
  const space = useRouteName();
  const [step, setStep] = React.useState(0);

  const handleNextStep = () => {
    setStep(step + 1);
  };
  const stepsContent: {
    title: TxKeyPath;
    subtitle: TxKeyPath;
    component: React.ReactNode;
  }[] = [
    {
      title: 'resetpass.forgetPasswordTitle',
      subtitle: 'resetpass.sendingEmailDescription',
      component: <ResetFormEmail onSubmit={handleNextStep} />,
    },
    {
      title: 'resetpass.verificationCodeTitle',
      subtitle: 'resetpass.verificationCodeDescription',
      component: <VerificationCode onSubmit={handleNextStep} />,
    },
    {
      title: 'resetpass.resetPasswordTitle',
      subtitle: 'resetpass.resetPasswordDescription',
      component: (
        <ResetFormPassword
          onSubmit={() => router.replace(`/(${space})/(public)/reset-password`)}
        />
      ),
    },
  ];

  const { title, subtitle, component } = stepsContent[step];
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 bg-white dark:bg-black"
    >
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
