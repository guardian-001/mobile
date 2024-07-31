import React from 'react';

import { translate } from '@/core';
import {
  Button,
  ControlledInput,
  HeaderTitle,
  ScrollView,
  Text,
  View,
} from '@/shared/components';
import { useCustomForm } from '@/shared/hooks';
import type { TxKeyPath } from '@/translations/i18n';

import PasswordRequirementItem from '../reset-password/password-requirement-item';
import { ChangePasswordFormSchema } from './schemas';
import type { PasswordFormType } from './type';

export default function ResetFormPasswordProfile() {
  const { handleSubmit, control, form } = useCustomForm(
    ChangePasswordFormSchema,
    {
      oldPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    }
  );

  const onSubmit = (data: PasswordFormType) => {
    console.log(data);
  };

  const passwordRequirements: { isValid: boolean; message: TxKeyPath }[] = [
    {
      isValid: form.watch('newPassword')?.length >= 8,
      message: 'resetpass.passwordMinLength',
    },
    {
      isValid:
        /[a-z]/.test(form.watch('newPassword')) &&
        form.watch('newPassword')?.length >= 1,
      message: 'resetpass.passwordLowercase',
    },
    {
      isValid: /[A-Z]/.test(form.watch('newPassword')),
      message: 'resetpass.passwordUppercase',
    },
    {
      isValid: /[0-9]/.test(form.watch('newPassword')),
      message: 'resetpass.passwordDigit',
    },
    {
      isValid: /[^a-zA-Z0-9]/.test(form.watch('newPassword')),
      message: 'resetpass.passwordSpecialChar',
    },
    {
      isValid:
        form.watch('confirmNewPassword') === form.watch('newPassword') &&
        form.watch('confirmNewPassword') !== '' &&
        form.watch('newPassword') !== '',
      message: 'resetpass.passwordConfirmation',
    },
  ];

  const allRequirementsValid = passwordRequirements.every(
    (requirement) => requirement.isValid
  );

  return (
    <View className="flex-1 p-4">
      <HeaderTitle text="resetpass.reset" type="transparent" />
      <ScrollView
        contentContainerClassName="gap-4"
        showsVerticalScrollIndicator={false}
      >
        <ControlledInput
          control={control}
          name="oldPassword"
          label={translate('profile.currentPassword-label')}
          placeholder={translate('profile.currentPassword-placeholder')}
          className="mt-8"
          secureTextEntry={true}
        />
        <ControlledInput
          control={control}
          name="newPassword"
          label={translate('profile.newPassword-label')}
          placeholder={translate('profile.newPassword-placeholder')}
          secureTextEntry={true}
        />
        <ControlledInput
          control={control}
          name="confirmNewPassword"
          label={translate('profile.confirmNewPassword-label')}
          placeholder={translate('profile.confirmNewPassword-placeholder')}
          className="mb-8"
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
      </ScrollView>
      <Button
        label={translate('resetpass.reset')}
        onPress={handleSubmit(onSubmit)}
        className="h-12 rounded-md"
        disabled={!allRequirementsValid}
      />
    </View>
  );
}
