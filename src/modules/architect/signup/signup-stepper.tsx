// SignupStepper.js
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';

import ResetFormPassword from '@/modules/reset-password/reset-form-password';
import { HeaderTitle, ScrollView, View } from '@/shared/components';
import { useRouteName } from '@/shared/hooks/use-get-route';
import {
  FormProvider,
  useFormStepper,
} from '@/shared/providers/use-form-stepper-provider';
import type { SignupFormDataType } from '@/types';

import ChooseSpeciality from './choose-speciality';
import CreateProfile from './create-profile';
import DemoPlanning from './demo-planning';
import DemoPlanningConfirmation from './demo-planning-confirmation';

const SignupStepperInner = () => {
  const space = useRouteName();
  const route = useRouter();

  const { step } = useFormStepper<SignupFormDataType>();

  const stepsContent: { component: React.ReactNode }[] = [
    {
      component: <ChooseSpeciality />,
    },
    {
      component: <CreateProfile />,
    },
    {
      component: <DemoPlanning />,
    },
    {
      component: <DemoPlanningConfirmation />,
    },
    {
      component: (
        <ResetFormPassword
          onSubmit={() => route.replace(`/(${space})/(public)/login`)}
        />
      ),
    },
  ];

  const { component } = stepsContent[step];

  return (
    <View className="items-between flex h-full bg-background dark:bg-black">
      <HeaderTitle text="signup.headerTitle" type="custom" />
      <ScrollView
        className="h-full flex-1 p-6 pt-12"
        contentContainerStyle={styles.scrollContainer}
      >
        {component}
      </ScrollView>
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
    date: '',
    timeSlot: '',
  };

  return (
    <FormProvider<SignupFormDataType> initialData={initialData}>
      <SignupStepperInner />
    </FormProvider>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    alignItems: 'center',
  },
});
