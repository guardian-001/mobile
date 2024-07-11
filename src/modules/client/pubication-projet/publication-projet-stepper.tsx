import * as React from 'react';
import { Platform, TouchableOpacity } from 'react-native';

import { Close } from '@/assets/icons';
import { type TxKeyPath } from '@/core';
import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  View,
} from '@/shared/components';

import ChooseSpeciality from './choose-speciality';

type Props = {};
export default function PublicationProjetStepper({}: Props) {
  const [step, setStep] = React.useState(0);
  const [scroller, setScroller] = React.useState(100 / 11);

  const handleNextStep = () => {
    setStep(step + 1);
    setScroller(scroller + 100 / 11);
  };
  const stepsContent: {
    title: TxKeyPath;
    subtitle: TxKeyPath;
    component: React.ReactNode;
  }[] = [
    {
      title: 'resetpass.verificationCodeTitle',
      subtitle: 'resetpass.verificationCodeDescription',
      component: <ChooseSpeciality onSubmit={handleNextStep} />,
    },
    {
      title: 'resetpass.verificationCodeTitle',
      subtitle: 'resetpass.verificationCodeDescription',
      component: <></>,
    },
    {
      title: 'resetpass.resetPasswordTitle',
      subtitle: 'resetpass.resetPasswordDescription',
      component: <></>,
    },
  ];

  const { title, subtitle, component } = stepsContent[step];
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="mt-16 w-full flex-1 rounded-t-3xl bg-white dark:bg-black "
    >
      <View className="p-6">
        <TouchableOpacity className="items-end">
          <Close />
        </TouchableOpacity>
        <Text className="mb-2 font-bold">{step + 1}/11 question</Text>
        <View className="h-2 w-full bg-background">
          <View
            className="rounded-2xl bg-primary"
            style={{ width: `${scroller}%` }}
          >
            <Text />
          </View>
        </View>
      </View>
      <ScrollView className="flex-1 px-6">
        <Text tx={title} className="mb-2 text-xl font-bold" />
        <Text tx={subtitle} className="text-base text-description" />
        {component}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
