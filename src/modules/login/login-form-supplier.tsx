import React from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { KeyboardAvoidingView, Platform, View } from 'react-native';
import type { z } from 'zod';

import type { LoginFormSupplierProps } from '@/app/(supplier)/(public)/login-email';
import { translate, useCustomForm } from '@/core';
import {
  ControlledInput,
  Image,
  ImageContainer,
  Text,
} from '@/shared/components';
import { EmailSchema } from '@/shared/validations';

import { Conditions, Container } from '../shared';
import LoginButton from '../shared/login-button';

export type LoginFormType = z.infer<typeof EmailSchema>;
export type LoginFormProps = {
  onSubmit: SubmitHandler<LoginFormType>;
};

export const LoginForm = ({ onSubmit = () => {} }: LoginFormSupplierProps) => {
  const { handleSubmit, control } = useCustomForm(EmailSchema);

  return (
    <View className="flex h-full w-full items-center justify-center">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className={` my-20 flex w-[90%] flex-1 items-center justify-start bg-secondary`}
      >
        <View>
          <Text className="text-center font-lato text-2xl font-extrabold text-primary-txt ">
            {translate('loginSupplier.bienvenueSurArchimatch')}
          </Text>
          <Text className="max-w-60 my-2 text-center font-lato text-sm text-description">
            {translate('loginSupplier.kitPartenariatPro')}
          </Text>
        </View>

        <Container style="flex w-[80%] h-[28%] items-center mb-0 justify-between gap-3 bg-white  pb-2">
          <ImageContainer className="flex  w-full items-center justify-center">
            <Image
              className="h-full w-full overflow-hidden rounded-t-xl "
              contentFit="cover"
              source={require('@/assets/supplier-login-screen.png')}
            />
          </ImageContainer>
        </Container>

        <View className="w-8/10 mt-5 flex justify-center">
          <ControlledInput
            testID="email-input"
            control={control}
            name="email"
            label={translate('login.email')}
            placeholder={translate('login.email')}
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
        <Conditions />
      </KeyboardAvoidingView>
    </View>
  );
};
