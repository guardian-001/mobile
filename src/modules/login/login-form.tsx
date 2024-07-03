import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'expo-router';
import React from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import type * as z from 'zod';

import { Button, ControlledInput, Text, View } from '@/shared/components';
import { LoginFormSchema } from '@/validations';

export type FormType = z.infer<typeof LoginFormSchema>;

export type LoginFormProps = {
  onSubmit?: SubmitHandler<FormType>;
};

export const LoginForm = ({ onSubmit = () => {} }: LoginFormProps) => {
  const router = useRouter();
  const { handleSubmit, control } = useForm<FormType>({
    resolver: zodResolver(LoginFormSchema),
  });
  return (
    <View className="flex-1 justify-center p-4">
      <Text testID="form-title" className="pb-6 text-center text-2xl">
        Sign In
      </Text>

      <ControlledInput
        testID="email-input"
        control={control}
        name="email"
        label="Email"
      />
      <ControlledInput
        testID="password-input"
        control={control}
        name="password"
        label="Password"
        placeholder="***"
        secureTextEntry={true}
      />
      <Button
        type="button"
        testID="login-button"
        label="Login"
        onPress={handleSubmit(onSubmit)}
      />

      <Button
        type="button"
        testID="login-button"
        label="go back"
        onPress={() => router.push('/onboarding')}
      />
    </View>
  );
};
