import React from 'react';

import { translate } from '@/core';
import { ControlledInput, ScrollView, Text, View } from '@/shared/components';
import { ControlledPhoneNumberInput } from '@/shared/components/controlled-phone-number-input';

import { StepButtons } from '../../../shared';
import { useDetails } from '../hooks';

export function Details() {
  const {
    onHandleBack,

    handleSubmit,
    control,
    onSubmit,
  } = useDetails();

  return (
    <View className="flex h-full flex-1 items-center justify-between gap-8 bg-black">
      <View>
        <Text
          tx={'signupStepCreateProfile.title'}
          className="mb-2 text-center text-2xl font-extrabold"
        />
      </View>

      <ScrollView className=" flex h-fit w-4/5 gap-5 rounded-3xl bg-white px-3 py-5 shadow-md">
        <ControlledInput
          testID="name-input"
          control={control}
          name="companyName"
          label={translate('labels.companyName')}
          placeholder={translate('labels.companyName')}
        />

        <ControlledInput
          testID="surname-input"
          control={control}
          name="companySpeciality"
          label={translate('labels.companySpeciality')}
          placeholder={translate('labels.companySpeciality')}
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
          name="companyAddress"
          label={translate('labels.address')}
          placeholder={translate('labels.address')}
        />
      </ScrollView>

      <View className="flex h-fit w-full items-center self-end ">
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
