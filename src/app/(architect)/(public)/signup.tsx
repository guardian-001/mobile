import React from 'react';

import SignupStepper from '@/modules/architect/signup/signup-stepper';
import { FocusAwareStatusBar } from '@/shared/components';

export default function ResetPassword() {
  return (
    <>
      <FocusAwareStatusBar />
      <SignupStepper />
    </>
  );
}
