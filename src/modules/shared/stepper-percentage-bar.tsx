import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { Close } from '@/assets/icons';
import { useFormStepper } from '@/shared/providers';
import colors from '@/theme/colors';

import type { ProjectRealizationType } from '../architect/realization/shared/types';

export default function StepperPercentageBar() {
  const router = useRouter();
  const { step, maxStep } = useFormStepper<ProjectRealizationType>();

  const percentage = maxStep && (step / (maxStep - 1)) * 100;
  return (
    <View className="  px-4 py-6">
      <TouchableOpacity
        className="  absolute right-5 top-5 z-10 float-right h-5 w-5   "
        onPress={() => {
          router.back();
        }}
      >
        <Close color={colors.blue} />
      </TouchableOpacity>
      {maxStep && step < maxStep && (
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
