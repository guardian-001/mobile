import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import type * as z from 'zod';

import { Button, ControlledInput, Text, View } from '@/shared/components';
import { translate } from '@/translations/i18n';
import { PasswordSchema } from '@/validations';

import PasswordRequirementItem from './password-requirement-item';

export type FormType = z.infer<typeof PasswordSchema>;

export type ResetFormPasswordProps = {
  onSubmit?: SubmitHandler<FormType>;
};
export default function ResetFormPassword({
  onSubmit = () => {},
}: ResetFormPasswordProps) {
  const { handleSubmit, control, watch, formState } = useForm<FormType>({
    resolver: zodResolver(PasswordSchema),
  });
  const password = watch('password');

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
        <PasswordRequirementItem
          isValid={password?.length >= 8}
          message="resetpass.password-min-length"
        />
        <PasswordRequirementItem
          isValid={/[a-z]/.test(password) && password?.length >= 1}
          message="resetpass.password-lowercase"
        />
        <PasswordRequirementItem
          isValid={/[A-Z]/.test(password)}
          message="resetpass.password-uppercase"
        />
        <PasswordRequirementItem
          isValid={/[0-9]/.test(password)}
          message="resetpass.password-digit"
        />
        <PasswordRequirementItem
          isValid={/[^a-zA-Z0-9]/.test(password)}
          message="resetpass.password-special-char"
        />
      </View>
      <Button
        label={translate('resetpass.reset')}
        onPress={handleSubmit(onSubmit)}
        className="h-12 rounded-md"
        disabled={!formState.isValid}
      />
    </View>
  );
}
