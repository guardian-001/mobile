import { useRouter } from 'expo-router';
import * as React from 'react';
import { Platform, TouchableOpacity } from 'react-native';

import { Close } from '@/assets/icons';
import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  View,
} from '@/shared/components';
import {
  FormProvider,
  useFormStepper,
} from '@/shared/providers/use-form-stepper-provider';
import type { AnnouncementType } from '@/types/announcement';

import { stepsContent } from './steps-content';

const CreateAnnouncementInner = () => {
  const router = useRouter();
  const lastStep = 11;
  const { step } = useFormStepper<AnnouncementType>();
  const { title, subtitle, component } = stepsContent[step];
  const percentageCompleted = Math.round(((step + 1) / lastStep) * 100);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="mt-12 w-full flex-1 rounded-t-3xl bg-white dark:bg-black "
    >
      <View className="p-4">
        <TouchableOpacity
          className="items-end"
          onPress={() => {
            router.back();
          }}
        >
          <Close />
        </TouchableOpacity>
        {step !== lastStep && (
          <View>
            <Text className="mb-2 font-bold">{percentageCompleted}%</Text>
            <View className="h-2 w-full rounded-2xl bg-background">
              <View
                className="rounded-2xl bg-primary"
                style={{ width: `${percentageCompleted}%` }}
              >
                <Text />
              </View>
            </View>
          </View>
        )}
      </View>
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
    <FormProvider<AnnouncementType> initialData={initialData}>
      <CreateAnnouncementInner />
    </FormProvider>
  );
}
