import React from 'react';

import { translate } from '@/core';
import { Button, ControlledInput, Text, View } from '@/shared/components';

import { useResetPassword } from './hooks';
import PasswordRequirementItem from './password-requirement-item';

export default function ResetFormPassword() {
  const {
    allRequirementsValid,
    passwordRequirements,
    onSubmit,
    handleSubmit,
    control,
  } = useResetPassword();

  return (
    <View className="flex-1">
      <ControlledInput
        control={control}
        name="password"
        label={translate('common.choosePassword')}
        placeholder={translate('common.enterPassword')}
        className="mt-8"
        secureTextEntry={true}
      />

      <ControlledInput
        control={control}
        name="confirmPassword"
        label={translate('common.confirmPassword')}
        placeholder={translate('common.enterPassword')}
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
      <Button
        label={translate('resetpass.reset')}
        onPress={handleSubmit(onSubmit)}
        className="h-12 rounded-md"
        disabled={!allRequirementsValid}
      />
    </View>
  );
}
