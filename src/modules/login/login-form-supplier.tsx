import React from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { View } from 'react-native';
import { KeyboardAvoidingView, Platform } from 'react-native';
import type * as z from 'zod';

import { translate } from '@/core';
import { Image, ImageContainer } from '@/shared/components';
import { ControlledInput, Text } from '@/shared/components';
import useCustomForm from '@/shared/hooks/use-custom-form';
import { EmailSchema } from '@/validations';

import { Container } from '../shared';
import LoginButton from '../shared/login-button';

export type LoginFormType = z.infer<typeof EmailSchema>;
export type LoginFormProps = {
  onSubmit: SubmitHandler<LoginFormType>;
};
export const LoginForm = ({ onSubmit = () => {} }: LoginFormProps) => {
  const { handleSubmit, control } = useCustomForm(EmailSchema);

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className={`flex-1  items-center justify-start  bg-secondary`}
        style={{ marginTop: '20%' }}
      >
        <Text
          className={`text-lato-regular my-2 flex-row items-center justify-between text-xl font-bold`}
        >
          {translate('loginSupplier.BienvenuesurArchimatch')}
        </Text>
        <Text
          className={`text-lato-regular flex-row items-center justify-between text-xl font-bold`}
        >
          {translate('loginSupplier.KitPartenariatPRO')}
        </Text>
        <Container style="flex w-[100%] h-[28%] items-center mb-0 justify-between gap-3 bg-white  pb-2">
          <ImageContainer className="flex  w-full items-center justify-center">
            <Image
              className="h-full w-full overflow-hidden rounded-t-xl "
              contentFit="cover"
              source={require('@/assets/Supplier-login.png')}
            />
          </ImageContainer>
        </Container>
        <View
          className="flex w-[90%] justify-center "
          style={{ marginTop: '5%' }}
        >
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
      </KeyboardAvoidingView>
    </>
  );
};
