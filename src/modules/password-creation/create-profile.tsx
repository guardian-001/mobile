import React from 'react';
import type { z } from 'zod';

import { translate, useCustomForm } from '@/core';
import { ControlledInput, ScrollView, Text, View } from '@/shared/components';
import { ControlledPhoneNumberInput } from '@/shared/components/controlled-phone-number-input';

import { SignupFormSchema } from '../supplier/schema/signup-request-schema-supplier';

export type SignupFormType = z.infer<typeof SignupFormSchema>;

export type ResetFormProps = {
  handlePreviousStep?: () => void;
  handleNextStep?: () => void;
};

export default function CreateProfile({}: // handlePreviousStep,
// handleNextStep,
ResetFormProps) {
  const { control } = useCustomForm(SignupFormSchema);

  return (
    <View className="flex h-fit items-center justify-between gap-8">
      <View>
        <Text
          tx={'signupStepCreateProfile.title'}
          className="mb-2 text-center text-2xl font-extrabold"
        />
        {/* <Text
          tx={'signupStepCreateProfile.description'}
          className="max-w-xs text-center text-sm text-description"
        /> */}
      </View>

      <ScrollView className=" flex h-fit w-4/5 gap-5 rounded-3xl bg-white px-3 py-5 shadow-md">
        <ControlledInput
          testID="name-input"
          control={control}
          name="firstName"
          label={translate('labels.name')}
          placeholder={translate('labels.name')}
        />
        <ControlledInput
          testID="surname-input"
          control={control}
          name="lastName"
          label={translate('labels.surname')}
          placeholder={translate('labels.surname')}
        />
        <ControlledPhoneNumberInput
          name="phoneNumber"
          control={control}
          label={translate('labels.phone')}
          rules={{ required: 'Phone number is required' }}
        />

        <ControlledInput
          testID="address-input"
          control={control}
          name="address"
          label={translate('labels.address')}
          placeholder={translate('labels.address')}
        />
      </ScrollView>
    </View>
  );
}
