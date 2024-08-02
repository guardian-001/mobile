import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View } from 'react-native';
import type * as z from 'zod';

import { useLoginApi } from '@/api/auth';
import { translate, useAuth, useCustomForm, useRouteName } from '@/core';
import { useLoginForm } from '@/shared';
import { Checkbox, ControlledInput, Text } from '@/shared/components';
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
  const [checked, setChecked] = useState(true);
  const [errors, setErrors] = useState('');
  const { handleSubmit, control } = useCustomForm(LoginFormSchema);
  const login = useLoginApi();
  const signIn = useAuth.use.signIn();

  const onSubmit = (data: LoginFormType) => {
    login.mutate(data, {
      onSuccess: (response) => {
        if (response.error) {
          setErrors(translate('login.loginError'));
          return;
        }

        signIn({
          token: {
            access: response.response?.data.access,
            refresh: response.response?.data.refresh,
          },
          user: response.response?.data.user,
        });
        router.replace(`/(${space})/(private)/profile`);
      },
      onError: (error) => {
        setErrors(translate('login.loginError'));
        console.error('Login error:', error);
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
    <View className="flex w-full justify-center">
      <ControlledInput
        testID="email-input"
        control={control}
        name="email"
        label={translate('login.email')}
        placeholder={translate('login.email')}
        handleOnChange={handleData}
        showSoftInputOnFocus={false}
        caretHidden={true}
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
        {errors && translate('login.loginError')}
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
