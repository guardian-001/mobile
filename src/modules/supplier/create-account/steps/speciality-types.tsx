import React from 'react';
import { ScrollView, View } from 'react-native';

import { translate } from '@/core';
import { StepButtons } from '@/modules/shared';
import { TagGroup, Text } from '@/shared/components';
import { EmptyList } from '@/shared/components/emptylist-custom';

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
    isSuccess,
    errorType,
    errorValidation,
    specialityTypesData,
    apiError,
  } = useSpecialityTypes();

  return (
    <View className="mb-5 mt-32 flex h-full flex-1 items-center justify-between gap-5  ">
      <View className="flex items-center">
        <Text
          tx={'signupSupplier.categories.title'}
          className="mb-2 text-start text-2xl font-extrabold"
        />
        <Text
          tx={'signupSupplier.categories.subtitle'}
          className="mb-2 text-start text-2xl font-extrabold"
        />
      </View>
      <ScrollView className="flex gap-4" showsVerticalScrollIndicator={false}>
        {isPending && <EmptyList isError={isError} isPending={isPending} />}
        {isSuccess && (
          <TagGroup
            name="specialityType"
            control={control}
            tags={specialityTypesData}
            label="realisation.detailsStep.localisationLabel"
            error={errorType}
            required={true}
            sliced={false}
            multi={true}
          />
        )}
      </ScrollView>
      <Text className="w-11/12 text-left text-sm text-error">
        {errorValidation ? translate(errorValidation) : ''}
        {apiError ? translate(apiError) : ''}
      </Text>
      <View className="flex h-fit w-full items-center">
        <StepButtons
          previous={{
            handlePreviousStep: onHandleBack,
            label: 'common.back',
          }}
          next={{
            handleSubmit: handleSubmit(onSubmit),
            label: 'common.start',
          }}
        />
      </View>
    </View>
  );
}
