import React from 'react';
import type { z } from 'zod';

import { translate } from '@/core';
import { StepButtons } from '@/modules/shared';
import { ControlledInput, ScrollView, Text, View } from '@/shared/components';
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
    <View className="flex h-fit items-center justify-between gap-16">
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

      <ScrollView className=" flex h-fit gap-5">
        <ControlledInput
          testID="email-input"
          control={control}
          name="email"
          label={translate('login.email')}
          placeholder={translate('login.email')}
        />
        <ControlledInput
          testID="password-input"
          control={control}
          name="password"
          label={translate('login.mdp')}
          placeholder={translate('login.mdp')}
          secureTextEntry={true}
        />
      </ScrollView>
      <StepButtons
        previous={{ handlePreviousStep, label: 'signup.retour' }}
        next={{ handleNextStep, label: 'signup.suivant' }}
      />
    </View>
  );
}
