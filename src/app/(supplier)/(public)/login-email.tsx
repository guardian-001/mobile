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
  useSoftKeyboardEffect();
  const verifEmail = true;

  const onSubmit: LoginFormSupplierProps['onSubmit'] = () => {
    if (verifEmail) {
      router.push('/(supplier)/(public)/login-pass');
    } else {
      router.push('/(supplier)/(public)/create-pass');
    }
  };

  return (
    <>
      <FocusAwareStatusBar />
      <LoginForm onSubmit={onSubmit} />
    </>
  );
}
