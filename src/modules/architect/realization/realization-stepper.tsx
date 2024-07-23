import React from 'react';

import StepperPercentageBar from '@/modules/shared/stepper-percentage-bar';
import { View } from '@/shared/components';
import {
  FormProvider,
  useFormStepper,
} from '@/shared/providers/use-form-stepper-provider';

import DemoPlanning from '../signup/demo-planning';
import type { ProjectRealizationType } from '../types';
import AdoptedStyle from './adopted-style';
import ApprovedServices from './approved-services';
import ProjectCategory from './project-category';

const ProjectRealizationStepperInner = () => {
  const { step } = useFormStepper<ProjectRealizationType>();
  const stepsContent: { component: React.ReactNode }[] = [
    {
      component: <ProjectCategory />,
    },
    {
      component: <AdoptedStyle />,
    },
    {
      component: <DemoPlanning />,
    },
    {
      component: <ApprovedServices />,
    },
  ];

  const { component } = stepsContent[step];
  return (
    <View className="items-between mt-16 flex h-full w-full rounded-t-3xl bg-background dark:bg-black">
      <StepperPercentageBar />
      <View className=" h-full flex-1 p-6 py-12">{component}</View>
    </View>
  );
};

export default function ProjectRealizationStepper() {
  const initialData = {
    projectName: '',
    architect: 0,
    needs: [] as number[],
    address: '',
    city: undefined,
    workSurface: undefined,
    description: '',
    architecturalStyle: 0,
    realizationImages: [],
    projectCategory: 0,
  };

  return (
    <FormProvider<ProjectRealizationType> initialData={initialData} maxStep={5}>
      <ProjectRealizationStepperInner />
    </FormProvider>
  );
}
