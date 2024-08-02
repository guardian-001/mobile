import React from 'react';

import { useSoftKeyboardEffect } from '@/core/keyboard';
import CreateAccountStepper from '@/modules/supplier/create-account/create-account-supplier';
import { FocusAwareStatusBar } from '@/shared/components';

export default function CompleteAccount() {
  useSoftKeyboardEffect();

  return (
    <>
      <FocusAwareStatusBar />
      <CreateAccountStepper />
    </>
  );
}
