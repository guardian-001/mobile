import React from 'react';

import { useAuth } from '@/core';
import { getStatus } from '@/core/auth/utils';
import { useSoftKeyboardEffect } from '@/core/keyboard';
import LoginShared from '@/modules/login/login';
import { FocusAwareStatusBar } from '@/shared/components';

export default function Login() {
  useSoftKeyboardEffect();
  const status = getStatus();
  console.log('status', status);
  const { token, user } = useAuth.getState();
  console.log(token, user);
  return (
    <>
      <FocusAwareStatusBar />
      <LoginShared />
    </>
  );
}
