import { View } from 'moti';
import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

import { Conditions, Container } from '@/modules/shared';
import { useFormStepper } from '@/shared';

import type { LoginSupplierFormType } from '../shared/types';
import { LoginEmail } from './login-email';
import { LoginPassword } from './login-password';
import { SupplierLoginHeader } from './shared/components';

export default function LoginSupplier() {
  const { formData } = useFormStepper<LoginSupplierFormType>();
  return (
    <View
      className={`h-full  flex-1 items-center justify-center  bg-secondary`}
    >
      <SupplierLoginHeader />
      <ScrollView>
        <Container style="flex-1 items-center justify-center  w-full px-8 py-10 gap-5 ">
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          >
            {formData?.state === 'email' && <LoginEmail />}
            {formData?.state === 'pass' && <LoginPassword />}
          </KeyboardAvoidingView>
          <Conditions />
        </Container>
      </ScrollView>
    </View>
  );
}
