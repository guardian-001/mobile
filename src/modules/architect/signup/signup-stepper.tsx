import { useRouter } from 'expo-router';
import React from 'react';

import ResetFormPassword from '@/modules/reset-password/reset-form-password';
import { HeaderTitle, ScrollView, View } from '@/shared/components';
import { useStepperNavigation } from '@/shared/hooks';
import { useRouteName } from '@/shared/hooks/use-get-route';

import ChooseSpeciality from './choose-speciality';
import CreateProfile from './create-profile';
import DemoPlanning from './demo-planning';
import DemoPlanningConfirmation from './demo-planning-confirmation';

type Props = {};
export default function SignupStepper({}: Props) {
  const space = useRouteName();
  const route = useRouter();
  const { step, handleNextStep, handlePreviousStep } = useStepperNavigation({
    maxSteps: 5,
  });

  const handleConfirmationStep = () => {
    console.log('confirmed');
  };

  const stepsContent: {
    component: React.ReactNode;
  }[] = [
    {
      component: (
        <ChooseSpeciality
          handleNextStep={handleNextStep}
          handlePreviousStep={handlePreviousStep}
        />
      ),
    },
    {
      component: (
        <CreateProfile
          handleNextStep={handleNextStep}
          handlePreviousStep={handlePreviousStep}
        />
      ),
    },
    {
      component: (
        <DemoPlanning
          handleNextStep={handleNextStep}
          handlePreviousStep={handlePreviousStep}
        />
      ),
    },
    {
      component: (
        <DemoPlanningConfirmation
          handleConfirmationStep={handleConfirmationStep}
        />
      ),
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
    <View className="items-between flex h-full  bg-background dark:bg-black">
      <HeaderTitle text="signup.headerTitle" type="custom" />
      <ScrollView
        className=" flex-1p-6 h-full pt-12"
        contentContainerStyle={{
          alignItems: 'center',
        }}
      >
        {component}
      </ScrollView>
    </View>
  );
}
