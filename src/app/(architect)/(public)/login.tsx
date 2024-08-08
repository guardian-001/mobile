import React from 'react';

import LoginShared from '@/modules/login/login';
import { FocusAwareStatusBar } from '@/shared/components';

export default function Login() {
  return (
    <>
      <FocusAwareStatusBar />
      <LoginShared />
    </>
  );
}
