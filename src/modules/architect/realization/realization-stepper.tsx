import React from 'react';

import StepperPercentageBar from '@/modules/shared/stepper-percentage-bar';
import { View } from '@/shared/components';
import {
  FormProvider,
  useFormStepper,
} from '@/shared/providers/use-form-stepper-provider';

import type { ProjectRealizationType } from './shared/types';
import { stepsContent } from './steps-content';

const ProjectRealizationStepperInner = () => {
  const { step } = useFormStepper<ProjectRealizationType>();

  const { component } = stepsContent[step];
  return (
    <View className="items-between mt-16 flex h-full w-full rounded-t-3xl bg-background  ">
      <StepperPercentageBar />
      <View className=" h-full flex-1 p-6 py-12">{component}</View>
    </View>
  );
};

export default function ProjectRealizationStepper() {
  const initialData = {
    projectName: '',
    needs: [] as number[],
    address: undefined,
    workSurface: undefined,
    description: '',
    architecturalStyle: 0,
    realizationImages: [],
    projectCategory: 0,
  };

  return (
    <FormProvider<ProjectRealizationType> initialData={initialData} maxStep={6}>
      <ProjectRealizationStepperInner />
    </FormProvider>
  );
}
