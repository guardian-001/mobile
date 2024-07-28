import React from 'react';

import TickIcon from '@/assets/icons/tick-icon';
import { StepButtons } from '@/modules/shared';
import { colors, ScrollView, Text, View } from '@/shared/components';

import { Gallery, GeneralInfos, Services } from '../shared/components';
import { useFinalStep } from '../shared/hooks';

export function FinalStep() {
  const { onSubmit, formData, onHandleBack, handleSubmit } = useFinalStep();
  return (
    <View className="mb-5 flex h-full flex-1 items-start justify-between gap-5  ">
      <ScrollView className="w-full ">
        <View>
          <View className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary">
            <TickIcon color={colors.white} width="100%" height="100%" />
          </View>
          <Text
            tx={'realisation.finalStep.title'}
            className="mb-2 text-start text-2xl font-extrabold"
          />
          <Text
            tx={'realisation.finalStep.description'}
            className="max-w-xs text-start text-sm text-description"
          />
        </View>
        <View className="mt-10">
          <Text className="mb-2 text-start text-2xl  font-extrabold">
            {formData.projectName}
          </Text>
          <Text className="max-w-xl text-start text-sm">
            {formData.description}
          </Text>
        </View>
        <GeneralInfos />
        <View className="mt-10">
          <View>
            <Text
              className="mb-2 text-start text-2xl  font-extrabold"
              tx={'realisation.finalStep.services'}
            />
            <Text
              className="max-w-xl text-start text-sm text-description"
              tx={'realisation.finalStep.servicesDescription'}
            />
          </View>
          <Services />
          <Gallery />
        </View>
      </ScrollView>
      <View className="flex h-fit w-full items-center">
        <StepButtons
          previous={{
            handlePreviousStep: onHandleBack,
            label: 'common.modifier',
          }}
          next={{
            handleSubmit: handleSubmit(onSubmit),
            label: 'common.publier',
          }}
        />
      </View>
    </View>
  );
}
