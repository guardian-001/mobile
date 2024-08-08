import React from 'react';

import ResetStepper from '@/modules/reset-password/reset-stepper';
import { FocusAwareStatusBar } from '@/shared/components';

export default function ResetPassword() {
  return (
    <>
      <FocusAwareStatusBar />
      <ResetStepper />
    </>
  );
}
