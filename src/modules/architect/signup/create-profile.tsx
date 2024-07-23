import React from 'react';

import { translate } from '@/core';
import { StepButtons } from '@/modules/shared';
import { ControlledInput, ScrollView, Text, View } from '@/shared/components';
import { ControlledPhoneNumberInput } from '@/shared/components/controlled-phone-number-input';
import { useCustomForm } from '@/shared/hooks';
import { useFormStepper } from '@/shared/providers';

import { CreateAccountSchema } from '../schemas';
import type { SignupFormDataType } from '../types';

export default function CreateProfile() {
  type CreateAccountFormType = Pick<
    SignupFormDataType,
    | 'firstName'
    | 'lastName'
    | 'email'
    | 'phoneNumber'
    | 'address'
    | 'architectIdentifier'
  >;
  const { formData, setFormData, onHandleNext, onHandleBack } =
    useFormStepper<SignupFormDataType>();
  const { handleSubmit, control } = useCustomForm(CreateAccountSchema, {
    firstName: formData?.firstName,
    lastName: formData?.lastName,
    email: formData?.email,
    phoneNumber: formData?.phoneNumber,
    address: formData?.address,
    architectIdentifier: formData?.architectIdentifier,
  });

  const onSubmit = (data: CreateAccountFormType) => {
    setFormData((prev: any) => ({
      ...prev,
      ...data,
    }));
    onHandleNext();
  };

  return (
    <View className="mb-5 flex h-full flex-1 items-center justify-between gap-16   ">
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

      <View className=" flex h-3/5  w-[90%]   items-center justify-center   rounded-3xl bg-white px-4 py-2 shadow-md">
        <ScrollView className=" flex gap-5 rounded-3xl bg-white px-4   ">
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
          <ControlledInput
            testID="matricule-input"
            control={control}
            name="architectIdentifier"
            label={translate('labels.matricule')}
            placeholder={translate('labels.matricule')}
          />
        </ScrollView>
      </View>

      <StepButtons
        previous={{ handlePreviousStep: onHandleBack, label: 'signup.retour' }}
        next={{ handleSubmit: handleSubmit(onSubmit), label: 'signup.suivant' }}
      />
    </View>
  );
}
