import React from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { View } from 'react-native';
import { KeyboardAvoidingView, Platform } from 'react-native';
import type * as z from 'zod';

import { translate, useCustomForm } from '@/core';
import { Image, ImageContainer } from '@/shared/components';
import { ControlledInput, Text } from '@/shared/components';
import { PasswordSchema } from '@/shared/validations';

import { Container } from '../shared';
import LoginButton from '../shared/login-button';

export type LoginFormType = z.infer<typeof PasswordSchema>;
export type LoginFormProps = {
  onSubmit: SubmitHandler<LoginFormType>;
};

export const LoginForm = ({ onSubmit = () => {} }: LoginFormProps) => {
  const { handleSubmit, control } = useCustomForm(PasswordSchema);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="mt-5 flex-1 items-center justify-start bg-secondary"
    >
      <Text className="text-lato-regular my-2 flex-row items-center justify-between text-xl font-bold">
        {translate('loginSupplier.bienvenueSurArchimatch')}
      </Text>
      <Text className="text-lato-regular flex-row items-center justify-between text-xl font-bold">
        {translate('loginSupplier.kitPartenariatPro')}
      </Text>
      <Container style="flex w-[100%] h-[50%] items-center mb-0 justify-between gap-3 bg-white  pb-2">
        <ImageContainer className="w-full flex-1">
          <Image
            className="h-full w-full overflow-hidden rounded-t-xl"
            contentFit="cover"
            source={require('@/assets/supplier-login-screen.png')}
          />
        </ImageContainer>
      </Container>
      <View className="mt-5 flex w-4/5 justify-center">
        <ControlledInput
          testID="email-input"
          control={control}
          name="password"
          label={translate('login.mdp')}
          placeholder={translate('login.mdp')}
        />
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
      <Text
        tx={'login.termsConditionsPart1'}
        className="items-center text-base text-description"
      />
      <Text
        tx={'login.termsConditionsPart2'}
        className="items-center text-base text-description"
      />
      <Text
        tx={'login.termsConditionsPart3'}
        className="items-center text-base text-description"
      />
      <Text
        tx={'login.termsConditionsPart4'}
        className="items-center text-base text-description"
      />
    </KeyboardAvoidingView>
  );
};
