import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View } from 'react-native';
import type * as z from 'zod';

import { useLoginApi } from '@/api/auth';
import { translate, useAuth } from '@/core';
import { Checkbox, ControlledInput, Text } from '@/shared/components';
import { useCustomForm } from '@/shared/hooks';
import { useRouteName } from '@/shared/hooks/use-get-route';
import { useLoginForm } from '@/shared/providers/use-login-form';
import { LoginFormSchema } from '@/shared/validations';

import { Container } from '../shared';
import LoginButton from '../shared/login-button';
export type LoginFormType = z.infer<typeof LoginFormSchema>;

export type LoginType = {
  name: string;
  data: string;
};

export const LoginForm = () => {
  const router = useRouter();
  const space = useRouteName();
  const signIn = useAuth.use.signIn();
  const [checked, setChecked] = useState(true);
  const { handleSubmit, control } = useCustomForm(LoginFormSchema);
  const login = useLoginApi();

  const onSubmit = (data: LoginFormType) => {
    login.mutate(data, {
      onSuccess: (response) => {
        console.log(response);
        signIn({
          token: { access: response.access, refresh: response.refresh },
          user: response.user,
        });

        router.push(`/(${space})/(private)/profile`);
      },
      onError: (error) => {
        throw error;
      },
    });
  };

  const handleResetPass = () => {
    router.push(`/(${space})/(public)/reset-password`);
  };
  const { setFormData } = useLoginForm();

  const handleData = ({ name, data }: LoginType) => {
    setFormData((prev: any) => ({
      ...prev,
      [name]: data,
    }));
  };
  return (
    <View className="flex w-full justify-center ">
      <ControlledInput
        testID="email-input"
        control={control}
        name="email"
        label={translate('login.email')}
        placeholder={translate('login.email')}
        handleOnChange={handleData}
      />
      <ControlledInput
        testID="password-input"
        control={control}
        name="password"
        label={translate('login.mdp')}
        placeholder={translate('login.mdp')}
        secureTextEntry={true}
        handleOnChange={handleData}
      />

      <Container style="flex-row justify-between my-3 ">
        <Checkbox
          checked={checked}
          onChange={setChecked}
          accessibilityLabel="Se souvenir de moi"
          label={translate('login.souvenir')}
        />
        <Text
          onPress={handleResetPass}
          className={`font-lato text-xs font-semibold text-primary `}
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
