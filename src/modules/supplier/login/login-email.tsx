import React from 'react';
import { View } from 'react-native';
import type * as z from 'zod';

import { translate } from '@/core';
import { Container } from '@/modules/shared';
import LoginButton from '@/modules/shared/login-button';
import { Checkbox, ControlledInput, Text } from '@/shared/components';
import type { LoginFormSchema } from '@/shared/validations';

import { useLoginEmailSupplier } from './shared/hooks/use-login-email-supplier';

export type LoginFormType = z.infer<typeof LoginFormSchema>;

export type LoginType = {
  name: string;
  data: string;
};

export const LoginEmail = () => {
  const {
    onSubmit,
    handleSubmit,
    control,
    handleResetPass,
    checked,
    setChecked,
  } = useLoginEmailSupplier();

  return (
    <View className="flex w-full justify-center">
      <ControlledInput
        testID="email-input"
        control={control}
        name="email"
        label={translate('login.email')}
        placeholder={translate('login.email')}
      />

      <Container style="flex-row justify-between my-3">
        <Checkbox
          checked={checked}
          onChange={setChecked}
          accessibilityLabel="Se souvenir de moi"
          label={translate('login.souvenir')}
        />
        <Text
          onPress={handleResetPass}
          className="font-lato text-xs font-semibold text-primary"
        >
          {translate('login.mdpOublier')}
        </Text>
      </Container>

      <LoginButton
        type="button"
        label={translate('login.connectBtn')}
        loginFunction={handleSubmit(onSubmit)}
        radius="rounded-lg"
        width="w-full"
        height="h-12"
        alternativeStyle="my-5"
      />
    </View>
  );
};
