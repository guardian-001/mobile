import React from 'react';
import type { z } from 'zod';

import { translate } from '@/core';
import { StepButtons } from '@/modules/shared';
import { ControlledInput, ScrollView, Text, View } from '@/shared/components';
import { ControlledPhoneNumberInput } from '@/shared/components/controlled-phone-number-input';
import { useCustomForm } from '@/shared/hooks';
import { useFormStepper } from '@/shared/providers/use-signup-stepper-provider';
import type { SignupFormSchema } from '@/validations';
import { createAccountSchema } from '@/validations';

export type SignupFormType = z.infer<typeof SignupFormSchema>;

export type ResetFormProps = {
  handlePreviousStep?: () => void;
  handleNextStep: () => void;
};

export type CreateProfileType = {
  name: string;
  data: string;
};

export default function CreateProfile({
  handlePreviousStep,
  handleNextStep,
}: ResetFormProps) {
  const { setFormData, formData } = useFormStepper();

  const handleData = ({ name, data }: CreateProfileType) => {
    setFormData((prev: any) => ({
      ...prev,
      [name]: data,
    }));
  };

  const { control, handleSubmit } = useCustomForm(createAccountSchema, {
    firstName: formData?.firstName,
    lastName: formData?.lastName,
    email: formData?.email,
    phoneNumber: formData?.phoneNumber,
    address: formData?.address,
    architectIdentifier: formData?.architectIdentifier,
  });

  const onSubmit = () => {
    handleNextStep();
  };

  return (
    <View className="flex h-fit items-center justify-between gap-8">
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

      <ScrollView className=" flex h-fit w-4/5 gap-5 rounded-3xl bg-white px-3 py-5 shadow-md">
        <ControlledInput
          testID="name-input"
          control={control}
          name="firstName"
          handleOnChange={handleData}
          label={translate('labels.name')}
          placeholder={translate('labels.name')}
        />
        <ControlledInput
          testID="surname-input"
          control={control}
          name="lastName"
          handleOnChange={handleData}
          label={translate('labels.surname')}
          placeholder={translate('labels.surname')}
        />
        <ControlledInput
          testID="email-input"
          control={control}
          name="email"
          handleOnChange={handleData}
          label={translate('labels.mail')}
          placeholder={translate('labels.mail')}
        />
        <ControlledPhoneNumberInput
          name="phoneNumber"
          control={control}
          handleOnChange={handleData}
          label={translate('labels.phone')}
          rules={{ required: 'Phone number is required' }}
        />

        <ControlledInput
          testID="address-input"
          control={control}
          name="address"
          handleOnChange={handleData}
          label={translate('labels.address')}
          placeholder={translate('labels.address')}
        />
        <ControlledInput
          testID="matricule-input"
          control={control}
          name="architectIdentifier"
          handleOnChange={handleData}
          label={translate('labels.matricule')}
          placeholder={translate('labels.matricule')}
        />
      </ScrollView>
      <StepButtons
        previous={{ handlePreviousStep, label: 'signup.retour' }}
        next={{ handleSubmit: handleSubmit(onSubmit), label: 'signup.suivant' }}
      />
    </View>
  );
}
