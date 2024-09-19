import React from 'react';

import { translate } from '@/core';
import { StepButtons } from '@/modules/shared';
import {
  ControlledInput,
  ControlledPhoneNumberInput,
  ControlledSelect,
  ScrollView,
  SignupHeaderTitle,
  Text,
  View,
} from '@/shared/components';

import { useProfile } from '../shared/hooks';

export function CreateProfile() {
  const { onSubmit, handleSubmit, control, onHandleBack, cityOptions } =
    useProfile();
  return (
    <View
      className={`mb-5 flex h-full w-full flex-1 items-center justify-between `}
    >
      <SignupHeaderTitle />
      <View className="mt-[8vh]">
        <Text
          tx="signup.headerTitle"
          className="mb-10 text-center text-xl font-bold text-primary-txt"
        />

        <Text
          tx={'signupStepCreateProfile.title'}
          className="mb-2 text-center text-2xl font-extrabold"
        />
        <Text
          tx={'signupStepCreateProfile.description'}
          className="max-w-xs text-center text-sm text-description"
        />
      </View>
      <ScrollView
        className=" mt-5 flex w-full gap-5 p-4"
        contentContainerClassName="justify-center"
        showsVerticalScrollIndicator={false}
      >
        <View className=" flex  w-full rounded-3xl  bg-white p-4  py-2 shadow-md shadow-color-shadow">
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
          <ControlledInput
            testID="email-input"
            control={control}
            name="email"
            label={translate('labels.mail')}
            placeholder={translate('labels.mail')}
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
          <ControlledSelect
            testID="city-input"
            control={control}
            name="city"
            label={translate('labels.city')}
            placeholder={translate('labels.city')}
            options={cityOptions}
          />
        </View>
      </ScrollView>
      <View className=" flex w-full items-center">
        <StepButtons
          previous={{
            handlePreviousStep: onHandleBack,
            label: 'common.back',
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
