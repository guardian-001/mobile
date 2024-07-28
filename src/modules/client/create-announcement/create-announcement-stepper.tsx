import * as React from 'react';
import { Platform } from 'react-native';

import StepperPercentageBar from '@/modules/shared/stepper-percentage-bar';
import { KeyboardAvoidingView, ScrollView, Text } from '@/shared/components';
import {
  FormProvider,
  useFormStepper,
} from '@/shared/providers/use-form-stepper-provider';
import type { AnnouncementType } from '@/types/announcement';

import { stepsContent } from './steps-content';

const CreateAnnouncementInner = () => {
  const lastStep = 11;
  const { step } = useFormStepper<AnnouncementType>();
  const { title, subtitle, component } = stepsContent[step];
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="mt-12 w-full flex-1 rounded-t-3xl bg-white dark:bg-black "
    >
      <StepperPercentageBar />
      <ScrollView
        className="flex-1 px-4"
        contentContainerClassName={`${
          step !== lastStep ? 'min-h-[85%]' : 'min-h-[90%]'
        }`}
      >
        <Text tx={title} className="mb-2 text-xl font-bold" />
        <Text tx={subtitle} className="text-base text-description" />
        {component}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default function CreateAnnouncementStepper() {
  const initialData = {
    architectSpeciality: 0,
    needs: [],
    projectCategory: 0,
    propertyType: 0,
    workType: 0,
    piecesRenovate: [],
    address: '',
    city: '',
    terrainSurface: '',
    workSurface: '',
    budget: '',
    description: '',
    architecturalStyle: 0,
    projectExtensions: [],
    projectImages: [],
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    rules: false,
    receiveNotifications: false,
    currentLanguage: '',
    numberFloors: 0,
    newConstruction: false,
  };

  return (
    <FormProvider<AnnouncementType> initialData={initialData} maxStep={11}>
      <CreateAnnouncementInner />
    </FormProvider>
  );
}
