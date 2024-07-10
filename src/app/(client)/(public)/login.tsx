import React from 'react';

import { useSoftKeyboardEffect } from '@/core/keyboard';
import LoginShared from '@/modules/login/login';
import { FocusAwareStatusBar } from '@/shared/components';

export default function Login() {
  useSoftKeyboardEffect();

  return (
    <>
      <FocusAwareStatusBar />

      <LoginShared />
    </>
  );
}
