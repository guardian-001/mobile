import React from 'react';
import { View } from 'react-native';
import type * as z from 'zod';

import { translate } from '@/core';
import { Container } from '@/modules/shared';
import LoginButton from '@/modules/shared/login-button';
import { Checkbox, ControlledInput, Text } from '@/shared/components';
import type { LoginFormSchema } from '@/shared/validations';

import { useLoginSupplier } from './shared/hooks/use-login-supplier';

export type LoginFormType = z.infer<typeof LoginFormSchema>;

export type LoginType = {
  name: string;
  data: string;
};

export const LoginPassword = () => {
  const {
    onSubmit,
    handleSubmit,
    control,
    handleResetPass,
    checked,
    setChecked,
    error,
    formData,
  } = useLoginSupplier();

  return (
    <View className="flex w-full justify-center">
      <View className="mb-5 w-full">
        <Text className="text-primary">{formData.email}</Text>
      </View>
      <ControlledInput
        testID="password-input"
        control={control}
        name="password"
        label={translate('login.mdp')}
        placeholder={translate('login.mdp')}
        secureTextEntry={true}
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
      <Text className="font-lato text-xs font-semibold text-primary">
        {error && translate('login.loginError')}
      </Text>
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
