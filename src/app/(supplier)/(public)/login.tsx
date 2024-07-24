import { useRouter } from 'expo-router';
import React from 'react';
import type { SubmitHandler } from 'react-hook-form';

import { useSoftKeyboardEffect } from '@/core/keyboard';
import { LoginForm } from '@/modules/login/login-form-supplier';
import { FocusAwareStatusBar } from '@/shared/components';
import type { LoginFormSupplierType } from '@/types';

export type LoginFormSupplierProps = {
  onSubmit: SubmitHandler<LoginFormSupplierType>;
};
export default function Login() {
  const router = useRouter();
  // const signIn = useAuth.use.signIn();
  useSoftKeyboardEffect();

  const onSubmit: LoginFormSupplierProps['onSubmit'] = () => {
    // signIn({
    //   token: { access: 'access-token', refresh: 'refresh-token' },
    //   user: user,
    // });
    router.push('/(supplier)/(public)/reset-password.tsx');
  };
  return (
    <>
      <FocusAwareStatusBar />
      <LoginForm onSubmit={onSubmit} />
    </>
  );
}
