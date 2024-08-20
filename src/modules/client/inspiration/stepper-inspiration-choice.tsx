import * as React from 'react';

import { View } from '@/shared/components';
import {
  FormProvider,
  useFormStepper,
} from '@/shared/providers/use-form-stepper-provider';

import { stepsContent } from './steps-content';
import type { InspirationRequestType } from './types';

const InspirationInner = () => {
  const { step } = useFormStepper<InspirationRequestType>();
  const { component } = stepsContent[step];
  return <View className="flex-1">{component}</View>;
};
export default function InspirationStepper() {
  const initialData = {
    projectCategory: 0,
    propertyType: [],
  };

  return (
    <FormProvider<InspirationRequestType> initialData={initialData}>
      <InspirationInner />
    </FormProvider>
  );
}
