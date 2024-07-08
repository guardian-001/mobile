import React from 'react';
import type { SubmitHandler } from 'react-hook-form';
import type * as z from 'zod';

import { Button, ControlledInput, Text, View } from '@/shared/components';
import useCustomForm from '@/shared/hooks/use-custom-form';
import type { TxKeyPath } from '@/translations/i18n';
import { translate } from '@/translations/i18n';
import { PasswordSchema } from '@/validations';

import PasswordRequirementItem from './password-requirement-item';

type ResetFormType = z.infer<typeof PasswordSchema>;

type ResetFormPasswordProps = {
  onSubmit?: SubmitHandler<ResetFormType>;
};
export default function ResetFormPassword({
  onSubmit = () => {},
}: ResetFormPasswordProps) {
  const { handleSubmit, control, form } = useCustomForm(PasswordSchema);

  const password = form.watch('password');

  const passwordRequirements: { isValid: boolean; message: TxKeyPath }[] = [
    {
      isValid: password?.length >= 8,
      message: 'resetpass.password-min-length',
    },
    {
      isValid: /[a-z]/.test(password) && password?.length >= 1,
      message: 'resetpass.password-lowercase',
    },
    {
      isValid: /[A-Z]/.test(password),
      message: 'resetpass.password-uppercase',
    },
    {
      isValid: /[0-9]/.test(password),
      message: 'resetpass.password-digit',
    },
    {
      isValid: /[^a-zA-Z0-9]/.test(password),
      message: 'resetpass.password-special-char',
    },
  ];

  return (
    <View className="flex-1">
      <ControlledInput
        control={control}
        name="password"
        label={translate('common.choosePassword')}
        placeholder={translate('common.enterPassword')}
        className="my-8"
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
        disabled={!form.formState.isValid}
      />
    </View>
  );
}
