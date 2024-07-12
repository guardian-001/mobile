import React from 'react';

import { useSoftKeyboardEffect } from '@/core/keyboard';
import SignupStepper from '@/modules/architect/signup/signup-stepper';
import { FocusAwareStatusBar } from '@/shared/components';

export default function ResetPassword() {
  useSoftKeyboardEffect();

  return (
    <>
      <FocusAwareStatusBar />
      <SignupStepper />
    </>
  );
}
