import { useRouter } from 'expo-router';
import React from 'react';

import { useAuth } from '@/core';
import { useSoftKeyboardEffect } from '@/core/keyboard';
import LoginShared from '@/modules/login/login';
import type { LoginFormProps } from '@/modules/login/login-form';
import { FocusAwareStatusBar } from '@/shared/components';

export default function Login() {
  const router = useRouter();
  const signIn = useAuth.use.signIn();
  useSoftKeyboardEffect();

  const onSubmit: LoginFormProps['onSubmit'] = () => {
    signIn({ access: 'access-token', refresh: 'refresh-token' });
    router.push('/(client)/(private)');
  };
  return (
    <>
      <FocusAwareStatusBar />
      <LoginShared onSubmit={onSubmit} />
    </>
  );
}
