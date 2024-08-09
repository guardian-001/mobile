import React from 'react';
import { Platform } from 'react-native';

import { translate } from '@/core';
import {
  ControlledInput,
  ControlledPhoneNumberInput,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  View,
} from '@/shared/components';

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
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className={`mb-5 flex h-full flex-1 items-center justify-between `}
    >
      <View className="mt-32">
        <Text
          tx={'signupSupplier.profileDetails.title'}
          className="mb-2 text-center text-2xl font-extrabold"
        />
        <Text
          tx={'signupSupplier.profileDetails.partenariat'}
          className="mb-2 text-center text-2xl font-extrabold"
        />
      </View>

      <View className=" max-h-4/5 h-120 flex w-full items-center justify-center  ">
        <ScrollView
          className=" flex gap-5 rounded-3xl   p-4"
          contentContainerClassName="justify-center"
          showsVerticalScrollIndicator={false}
        >
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
      </View>

      <StepButtons
        previous={{ handlePreviousStep: onHandleBack, label: 'common.back' }}
        next={{ handleSubmit: handleSubmit(onSubmit), label: 'common.next' }}
      />
    </KeyboardAvoidingView>
  );
}
