import React from 'react';
import type { z } from 'zod';

import { translate } from '@/core';
import { ControlledInput, ScrollView, Text, View } from '@/shared/components';
import { ControlledPhoneNumberInput } from '@/shared/components/controlled-phone-number-input';

import { StepButtons } from '../../../shared';
import type { SignupFormSchema } from '../../schema/signup-request-schema-supplier';
import { useCreateAccount } from '../hooks/use-create-account';

export type SignupFormType = z.infer<typeof SignupFormSchema>;

export type ResetFormProps = {
  handlePreviousStep?: () => void;
  handleNextStep?: () => void;
};

export default function InterestPick() {
  const { onHandleBack, handleSubmit, control, onSubmit } = useCreateAccount();

  return (
    <View className="flex h-fit items-center justify-between gap-8">
      <View>
        <Text
          tx={'signupStepCreateProfile.title'}
          className="mb-2 text-center text-2xl font-extrabold"
        />
      </View>

      <ScrollView className=" flex  w-4/5 gap-5 rounded-3xl bg-white px-3 py-5 shadow-md">
        <ControlledInput
          testID="name-input"
          control={control}
          name="entrepriseName"
          label="Nom de la société " //translate
          placeholder={translate('labels.name')} //translate
        />

        <ControlledInput
          testID="surname-input"
          control={control}
          name="specialty"
          label="Spécialité" //translate
          placeholder={translate('labels.surname')} //translate
        />
        <ControlledPhoneNumberInput
          name="phone"
          control={control}
          label={translate('labels.phone')}
          rules={{ required: 'Phone number is required' }}
        />

        <ControlledInput
          testID="address-input"
          control={control}
          name="AdresseBureau"
          label={translate('labels.address')}
          placeholder={translate('labels.address')}
        />
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
