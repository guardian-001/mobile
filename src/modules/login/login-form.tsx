import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';
import * as z from 'zod';

import { translate } from '@/core';
import { Checkbox, ControlledInput, Text } from '@/shared/components';

import { Container } from '../shared';
import LoginButton from '../shared/login-button';

const schema = z.object({
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email('Invalid email format'),
  password: z
    .string({
      required_error: 'Password is required',
    })
    .min(6, 'Password must be at least 6 characters'),
});
export type FormType = z.infer<typeof schema>;
export type LoginFormProps = {
  onSubmit?: SubmitHandler<FormType>;
};
export const LoginForm = ({ onSubmit = () => {} }: LoginFormProps) => {
  const { handleSubmit, control } = useForm<FormType>({
    resolver: zodResolver(schema),
  });
  const [checked, setChecked] = useState(true);
  return (
    <View className="flex w-full justify-center ">
      <ControlledInput
        testID="email-input"
        control={control}
        name="email"
        label={translate('login.email')}
        placeholder={translate('login.email')}
      />
      <ControlledInput
        testID="password-input"
        control={control}
        name="password"
        label={translate('login.mdp')}
        placeholder={translate('login.mdp')}
        secureTextEntry={true}
      />
      <Container style="flex-row justify-between my-3 ">
        <Checkbox
          checked={checked}
          onChange={setChecked}
          accessibilityLabel="Se souvenir de moi"
          label={translate('login.souvenir')}
        />
        <Text className={`font-lato text-xs font-semibold text-primary `}>
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
