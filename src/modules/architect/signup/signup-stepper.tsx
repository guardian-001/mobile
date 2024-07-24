import React from 'react';

import { HeaderTitle, View } from '@/shared/components';
import {
  FormProvider,
  useFormStepper,
} from '@/shared/providers/use-form-stepper-provider';

import type { SignupFormDataType } from '../types';
import ChooseSpeciality from './choose-speciality';
import CreateProfile from './create-profile';
import DemoPlanning from './demo-planning';
import DemoPlanningConfirmation from './demo-planning-confirmation';

const SignupStepperInner = () => {
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
  ];

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
    date: '',
    timeSlot: '',
  };

  return (
    <FormProvider<SignupFormDataType> initialData={initialData}>
      <SignupStepperInner />
    </FormProvider>
  );
}
