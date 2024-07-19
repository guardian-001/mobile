import { useRouter } from 'expo-router';
import React from 'react';

import ResetFormPassword from '@/modules/reset-password/reset-form-password';
import { HeaderTitle, View } from '@/shared/components';
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
      <View className=" h-full flex-1 p-6 py-12">{component}</View>
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
