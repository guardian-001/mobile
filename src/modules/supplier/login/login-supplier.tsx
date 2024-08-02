import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

import { LoginHeader, Welcome } from '@/modules/Components';
import { AuthFooter, Conditions, Container } from '@/modules/shared';
import { useFormStepper } from '@/shared';

import type { LoginSupplierFormType } from '../shared/types';
import { LoginEmail } from './login-email';
import { LoginPassword } from './login-password';

export default function LoginSupplier() {
  const { formData } = useFormStepper<LoginSupplierFormType>();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className={`flex-1  items-center justify-center  bg-secondary`}
    >
      <LoginHeader />
      <ScrollView>
        <Container style="flex-1 items-start justify-start w-full px-8 py-10 gap-5 ">
          <Welcome />
          {formData?.state === 'email' && <LoginEmail />}
          {formData?.state === 'pass' && <LoginPassword />}
          <Conditions />
          <AuthFooter />
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
