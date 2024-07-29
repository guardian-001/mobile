import React from 'react';
import type { SubmitHandler } from 'react-hook-form';

import { useSoftKeyboardEffect } from '@/core/keyboard';
import CreateAccountStepper from '@/modules/supplier/create-account/create-account-supplier';
import { FocusAwareStatusBar } from '@/shared/components';
import type { LoginFormSupplierType } from '@/types';

export type LoginFormSupplierProps = {
  onSubmit: SubmitHandler<LoginFormSupplierType>;
};
export default function Login() {
  useSoftKeyboardEffect();

  return (
    <>
      <FocusAwareStatusBar />
      <CreateAccountStepper />
    </>
  );
}
