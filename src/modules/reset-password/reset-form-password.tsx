import React from 'react';

import { translate } from '@/core';
import { Button, ControlledInput, Text, View } from '@/shared/components';
import { useCustomForm } from '@/shared/hooks';
import { useFormStepper } from '@/shared/providers/use-form-stepper-provider';
import type { TxKeyPath } from '@/translations/i18n';
import type { ResetPassFormType } from '@/types';
import { ResetPassFormSchema } from '@/validations';

import PasswordRequirementItem from './password-requirement-item';

export default function ResetFormPassword() {
  type PasswordFormType = Pick<
    ResetPassFormType,
    'password' | 'confirmPassword'
  >;
  const { formData, setFormData, onHandleNext } =
    useFormStepper<ResetPassFormType>();
  const { handleSubmit, control, form } = useCustomForm(ResetPassFormSchema, {
    password: formData.password,
    confirmPassword: formData.confirmPassword,
  });

  const onSubmit = (data: PasswordFormType) => {
    setFormData((prev: any) => ({
      ...prev,
      ...data,
    }));
    onHandleNext();
  };

  const passwordRequirements: { isValid: boolean; message: TxKeyPath }[] = [
    {
      isValid: form.watch('password')?.length >= 8,
      message: 'resetpass.password-min-length',
    },
    {
      isValid:
        /[a-z]/.test(form.watch('password')) &&
        form.watch('password')?.length >= 1,
      message: 'resetpass.password-lowercase',
    },
    {
      isValid: /[A-Z]/.test(form.watch('password')),
      message: 'resetpass.password-uppercase',
    },
    {
      isValid: /[0-9]/.test(form.watch('password')),
      message: 'resetpass.password-digit',
    },
    {
      isValid: /[^a-zA-Z0-9]/.test(form.watch('password')),
      message: 'resetpass.password-special-char',
    },
    {
      isValid:
        form.watch('confirmPassword') === form.watch('password') &&
        form.watch('confirmPassword') !== '' &&
        form.watch('password') !== '',
      message: 'resetpass.passwordConfirmation',
    },
  ];

  const allRequirementsValid = passwordRequirements.every(
    (requirement) => requirement.isValid
  );

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
