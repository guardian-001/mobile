import * as React from 'react';
import { Platform } from 'react-native';

import { type TxKeyPath } from '@/core';
import { Image, KeyboardAvoidingView, ScrollView } from '@/shared/components';
import { useRouteName } from '@/shared/hooks/use-get-route';

import CreateProfile from './create-profile';
import ResetFormPassword from './creation-form-password-supplier';
import InterestPick from './intrest-pick'; // Import the InterestPick component
import VerificationCode from './verification-code-supplier';

type Props = { initialStep?: number };
export default function ResetStepper({ initialStep = 0 }: Props) {
  const space = useRouteName();
  const [step, setStep] = React.useState(initialStep);
  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const stepsContent: {
    title: TxKeyPath;
    subtitle: TxKeyPath;
    component: React.ReactNode;
  }[] = [
    {
      title: 'resetpass.verificationCodeTitle',
      subtitle: 'resetpass.verificationCodeDescription',
      component: <VerificationCode onSubmit={handleNextStep} />,
    },
    {
      title: 'resetpass.resetPasswordTitle',
      subtitle: 'resetpass.resetPasswordDescription',
      component: <ResetFormPassword onSubmit={handleNextStep} />,
    },
    {
      title: 'resetpass.resetPasswordDescription',
      subtitle: 'resetpass.resetPasswordDescription',
      component: (
        <CreateProfile
          handlePreviousStep={handlePreviousStep}
          handleNextStep={handleNextStep}
        />
      ),
    },
    {
      title: 'resetpass.resetPasswordDescription',
      subtitle: 'resetpass.resetPasswordDescription',
      component: <InterestPick onSubmit={handleNextStep} />, // Use the InterestPick component here
    },
  ];

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
