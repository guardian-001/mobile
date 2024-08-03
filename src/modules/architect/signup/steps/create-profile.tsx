import React from 'react';

import { translate } from '@/core';
import { StepButtons } from '@/modules/shared';
import {
  ControlledInput,
  ControlledPhoneNumberInput,
  ControlledSelect,
  ScrollView,
  Text,
  View,
} from '@/shared/components';

import { useProfile } from '../shared/hooks';

export function CreateProfile() {
  const { onSubmit, handleSubmit, control, onHandleBack, cityOptions } =
    useProfile();
  return (
    <View className="mb-5 flex h-full flex-1 items-center justify-between gap-6  ">
      <View>
        <Text
          tx={'signupStepCreateProfile.title'}
          className="mb-2 text-center text-2xl font-extrabold"
        />
        <Text
          tx={'signupStepCreateProfile.description'}
          className="max-w-xs text-center text-sm text-description"
        />
      </View>

      <View className=" max-h-3/5 flex h-3/5  w-[90%]   items-center justify-center   rounded-3xl bg-white px-4 py-2 shadow-md">
        <ScrollView
          className=" flex gap-5 rounded-3xl bg-white p-4"
          contentContainerClassName="justify-center"
          showsVerticalScrollIndicator={false}
        >
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
        </ScrollView>
      </View>

      <StepButtons
        previous={{ handlePreviousStep: onHandleBack, label: 'common.back' }}
        next={{ handleSubmit: handleSubmit(onSubmit), label: 'common.next' }}
      />
    </View>
  );
}
