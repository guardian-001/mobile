import React from 'react';
import type { z } from 'zod';

import { UserImg } from '@/assets/icons/archimatch/user-img';
import type { TxKeyPath } from '@/core';
import { translate } from '@/core';
import PasswordRequirementItem from '@/modules/reset-password/password-requirement-item';
import { Button, ControlledInput, Text, View } from '@/shared/components';

import type { SignupFormSchema } from '../shared/schema/signup-request-schema-supplier';
import { useCreatePassword } from './hooks/use-create-account';

export type SignupFormType = z.infer<typeof SignupFormSchema>;

export type ResetFormProps = {
  handlePreviousStep?: () => void;
  handleNextStep?: () => void;
};

export default function CreatePassFromLink() {
  const { handleSubmit, control, onSubmit, form } = useCreatePassword();
  const passwordRequirements: { isValid: boolean; message: TxKeyPath }[] = [
    {
      isValid: form.watch('password')?.length >= 8,
      message: 'resetpass.passwordMinLength',
    },
    {
      isValid:
        /[a-z]/.test(form.watch('password')) &&
        form.watch('password')?.length >= 1,
      message: 'resetpass.passwordLowercase',
    },
    {
      isValid: /[A-Z]/.test(form.watch('password')),
      message: 'resetpass.passwordUppercase',
    },
    {
      isValid: /[0-9]/.test(form.watch('password')),
      message: 'resetpass.passwordDigit',
    },
    {
      isValid: /[^a-zA-Z0-9]/.test(form.watch('password')),
      message: 'resetpass.passwordSpecialChar',
    },
  ];

  const allRequirementsValid = passwordRequirements.every(
    (requirement) => requirement.isValid
  );

  return (
    <View className="flex  w-full items-center justify-between gap-5">
      <View className="flex w-4/5">
        <Text
          tx={'signupStepCreateProfile.title'}
          className="mb-2 text-start text-2xl font-extrabold"
        />
        <Text className="mb-2 text-start text-base font-normal text-description">
          {translate('loginSupplier.createPass')}
        </Text>
      </View>

      <View className="flex w-4/5 flex-row items-center justify-start gap-2">
        <UserImg />
        <View>
          <Text className="font-bold text-primary-txt">Adam Legrand</Text>
          <Text className=" text-cyan-400">A.Legrand@gmail.com</Text>
        </View>
      </View>

      <View className="w-4/5">
        <ControlledInput
          control={control}
          name="password"
          label={translate('common.choosePassword')}
          placeholder={translate('common.enterPassword')}
          className="mt-8"
          secureTextEntry={true}
        />

        <View className="mb-4">
          <Text tx="resetpass.passwordConditions" />
          {passwordRequirements.map((requirement, index) => (
            <PasswordRequirementItem
              key={index}
              isValid={requirement.isValid}
              message={requirement.message}
            />
          ))}
        </View>
        <Button
          label={translate('resetpass.reset')}
          onPress={handleSubmit(onSubmit)}
          className="h-12 rounded-md"
          disabled={!allRequirementsValid}
        />
      </View>
    </View>
  );
}
