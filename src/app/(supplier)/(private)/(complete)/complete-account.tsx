import React from 'react';

import CreateAccountStepper from '@/modules/supplier/create-account/create-account-supplier';
import { FocusAwareStatusBar } from '@/shared/components';

export default function CompleteAccount() {
  return (
    <>
      <FocusAwareStatusBar />
      <CreateAccountStepper />
    </>
  );
}
