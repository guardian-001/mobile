import React from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

import { LoginHeader, Welcome } from '../Components';
import { AuthFooter, Conditions, Container } from '../shared';
import type { FormType } from './login-form';
import { LoginForm } from './login-form';
export type LoginFormProps = {
  onSubmit?: SubmitHandler<FormType>;
};
export default function LoginShared({ onSubmit = () => {} }: LoginFormProps) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className={`flex-1  items-center justify-center  bg-secondary`}
    >
      <LoginHeader />
      <ScrollView>
        <Container style="flex-1 items-start justify-start w-full px-8 py-10 gap-5 ">
          <Welcome />
          <LoginForm onSubmit={onSubmit} />
          <Conditions />
          <AuthFooter />
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
