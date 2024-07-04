import React from 'react';

import { useSoftKeyboardEffect } from '@/core/keyboard';
import ResetStepper from '@/modules/reset-password/reset-stepper';
import { FocusAwareStatusBar } from '@/shared/components';

export default function ResetPassword() {
  useSoftKeyboardEffect();

  return (
    <>
      <FocusAwareStatusBar />
      <ResetStepper />
    </>
  );
}
