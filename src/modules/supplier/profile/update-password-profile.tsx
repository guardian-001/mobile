import React from 'react';
import { Platform } from 'react-native';

import { translate } from '@/core';
import PasswordRequirementItem from '@/modules/reset-password/password-requirement-item';
import {
  Button,
  ControlledInput,
  HeaderTitle,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  View,
} from '@/shared/components';

import { useUpdatePassword } from './hooks/use-update-password';

export default function UpdatePasswordProfile() {
  const {
    allRequirementsValid,
    passwordRequirements,
    onSubmit,
    handleSubmit,
    control,
  } = useUpdatePassword();
  return (
    <>
      <HeaderTitle text="resetpass.reset" type="default" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1 bg-white"
      >
        <ScrollView
          contentContainerClassName="gap-4 px-4"
          showsVerticalScrollIndicator={false}
        >
          <ControlledInput
            control={control}
            name="oldPassword"
            label={translate('profile.currentPassword-label')}
            placeholder={translate('profile.currentPassword-placeholder')}
            className="mt-4"
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
          <View>
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
          className="mx-4 mb-10 h-12 rounded-md"
          disabled={!allRequirementsValid}
        />
      </KeyboardAvoidingView>
    </>
  );
}
