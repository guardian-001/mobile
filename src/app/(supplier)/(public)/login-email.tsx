import { useRouter } from 'expo-router';
import React from 'react';
import type { SubmitHandler } from 'react-hook-form';

import { useAuth } from '@/core';
import { useSoftKeyboardEffect } from '@/core/keyboard';
import { LoginForm } from '@/modules/login/login-form-supplier';
import { FocusAwareStatusBar } from '@/shared/components';
import type { LoginFormSupplierType } from '@/types';

export type LoginFormSupplierProps = {
  onSubmit: SubmitHandler<LoginFormSupplierType>;
};
export default function Login() {
  const router = useRouter();
  const signIn = useAuth.use.signIn();
  useSoftKeyboardEffect();

  const onSubmit: LoginFormSupplierProps['onSubmit'] = () => {
    signIn({ access: 'access-token', refresh: 'refresh-token' });
    router.push('/(supplier)/(public)/login-pass');
  };
  return (
    <>
      <FocusAwareStatusBar />
      <LoginForm onSubmit={onSubmit} />
    </>
  );
}
