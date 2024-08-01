import * as React from 'react';
import { Platform } from 'react-native';

import StepperPercentageBar from '@/modules/shared/stepper-percentage-bar';
import { KeyboardAvoidingView, Text, View } from '@/shared/components';
import {
  FormProvider,
  useFormStepper,
} from '@/shared/providers/use-form-stepper-provider';
import type { AnnouncementType } from '@/types/announcement';

import { stepsContent } from './steps-content';

const CreateAnnouncementInner = () => {
  const { step } = useFormStepper<AnnouncementType>();
  const { title, subtitle, component } = stepsContent[step];
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="mt-12 w-full flex-1 rounded-t-3xl bg-white dark:bg-black "
    >
      <StepperPercentageBar />
      <View className="h-full flex-1 px-4">
        {step < 12 && (
          <>
            <Text tx={title} className="mb-2 text-xl font-bold" />
            <Text tx={subtitle} className="text-base text-description" />
          </>
        )}
        {component}
      </View>
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
    currentLanguage: 'fr',
    numberFloors: 0,
    newConstruction: false,
    client: {
      user: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        rules: false,
        receiveNotifications: false,
        userType: 'Client',
      },
    },
  };

  return (
    <FormProvider<AnnouncementType> initialData={initialData} maxStep={11}>
      <CreateAnnouncementInner />
    </FormProvider>
  );
}
