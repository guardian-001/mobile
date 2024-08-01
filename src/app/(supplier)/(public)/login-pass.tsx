import { useRouter } from 'expo-router';
import React from 'react';
import type { SubmitHandler } from 'react-hook-form';
import type { z } from 'zod';

import { useSoftKeyboardEffect } from '@/core/keyboard';
import { LoginForm } from '@/modules/login/login-pass-supplier';
import { FocusAwareStatusBar } from '@/shared/components';
import type { PasswordSchema } from '@/shared/validations';

export default function Login() {
  const router = useRouter();
  useSoftKeyboardEffect();

  const onSubmit: SubmitHandler<z.infer<typeof PasswordSchema>> = () => {
    router.push('/(supplier)/(public)/reset-password-supplier');
  };

  return (
    <>
      <FocusAwareStatusBar />
      <LoginForm onSubmit={onSubmit} />
    </>
  );
}
