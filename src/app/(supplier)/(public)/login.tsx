import { useRouter } from 'expo-router';
import React from 'react';

import { useAuth } from '@/core';
import { useSoftKeyboardEffect } from '@/core/keyboard';
import { LoginForm } from '@/modules/login/login-form-supplier';
import { FocusAwareStatusBar } from '@/shared/components';
import type { LoginFormProps } from '@/types';

export default function Login() {
  const router = useRouter();
  const signIn = useAuth.use.signIn();
  useSoftKeyboardEffect();

  const onSubmit: LoginFormProps['onSubmit'] = () => {
    signIn({ access: 'access-token', refresh: 'refresh-token' });
    router.push('/(supplier)/(public)/reset-password.tsx');
  };
  return (
    <>
      <FocusAwareStatusBar />
      <LoginForm onSubmit={onSubmit} />
    </>
  );
}
