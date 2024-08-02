import React from 'react';
import { ScrollView, View } from 'react-native';

import { StepButtons } from '@/modules/shared';
import { ErrorData, PendingData, TagGroup, Text } from '@/shared/components';

import { useSpecialityTypes } from '../hooks';

export type ResetFormProps = {
  handlePreviousStep?: () => void;
  handleNextStep?: () => void;
};

export function SpecialityTypes() {
  const {
    onHandleBack,

    handleSubmit,
    control,
    onSubmit,
    isPending,
    isError,
    specialityTypesData,
  } = useSpecialityTypes();

  return (
    <View className="flex h-fit items-center justify-between gap-8">
      <View>
        <Text
          tx={'signupStepCreateProfile.title'}
          className="mb-2 text-center text-2xl font-extrabold"
        />
      </View>

      <ScrollView className=" flex  w-4/5 gap-5 rounded-3xl bg-white px-3 py-5 shadow-md">
        {isPending && <PendingData message="Pending Data" />}
        {isError && <ErrorData message="Error Loading Data" />}
        {specialityTypesData && (
          <TagGroup
            name="specialityType"
            control={control}
            tags={specialityTypesData}
            label="realisation.detailsStep.localisationLabel"
            // error={error}
            required={true}
          />
        )}
      </ScrollView>
      <View className="flex h-fit w-full items-center ">
        <StepButtons
          previous={{
            handlePreviousStep: onHandleBack,
            label: 'common.ignore',
          }}
          next={{
            handleSubmit: handleSubmit(onSubmit),
            label: 'common.next',
          }}
        />
      </View>
    </View>
  );
}
