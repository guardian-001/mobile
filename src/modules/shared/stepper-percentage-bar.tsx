import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { Close } from '@/assets/icons';
import { useFormStepper } from '@/shared/providers/use-form-stepper-provider';

import type { ProjectRealizationType } from '../architect/types';

export default function StepperPercentageBar() {
  const router = useRouter();
  const { step, maxStep } = useFormStepper<ProjectRealizationType>();

  const percentage = maxStep && (step / maxStep) * 100;

  return (
    <View className="px-4 py-6">
      <TouchableOpacity
        className="items-end"
        onPress={() => {
          router.back();
        }}
      >
        <Close />
      </TouchableOpacity>
      {step !== 5 && (
        <View>
          <Text className="mb-2 font-bold">
            {percentage} {'%'}
          </Text>
          <View className="h-2 w-full rounded-2xl bg-white shadow-md">
            <View
              className="rounded-2xl bg-primary"
              style={{ width: `${percentage ? percentage : 0}%` }}
            >
              <Text />
            </View>
          </View>
        </View>
      )}
    </View>
  );
}
