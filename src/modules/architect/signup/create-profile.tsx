import React from 'react';
import type { z } from 'zod';

import { translate } from '@/core';
import { StepButtons } from '@/modules/shared';
import { ControlledInput, ScrollView, Text, View } from '@/shared/components';
import { ControlledPhoneNumberInput } from '@/shared/components/controlled-phone-number-input';
import useCustomForm from '@/shared/hooks/use-custom-form';
import { SignupFormSchema } from '@/validations';

export type SignupFormType = z.infer<typeof SignupFormSchema>;

export type ResetFormProps = {
  handlePreviousStep?: () => void;
  handleNextStep?: () => void;
};

export default function CreateProfile({
  handlePreviousStep,
  handleNextStep,
}: ResetFormProps) {
  const { control } = useCustomForm(SignupFormSchema);
  // const router = useRouter();

  // const space = useRouteName();

  // const handleFormSubmit: SubmitHandler<LoginFormType> = (data) => {
  //   router.push(`/(${space})/(public)/login`);
  //   onSubmit(data);
  // };
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
          name="name"
          label={translate('labels.name')}
          placeholder={translate('labels.name')}
        />
        <ControlledInput
          testID="surname-input"
          control={control}
          name="surname"
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
          name="phone"
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
          name="matricule"
          label={translate('labels.matricule')}
          placeholder={translate('labels.matricule')}
        />
      </ScrollView>
      <StepButtons
        previous={{ handlePreviousStep, label: 'signup.retour' }}
        next={{ handleNextStep, label: 'signup.suivant' }}
      />
    </View>
  );
}
