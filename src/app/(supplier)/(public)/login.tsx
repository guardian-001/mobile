import React from 'react';

import LoginSupplier from '@/modules/supplier/login/login-supplier';
import type { LoginSupplierFormType } from '@/modules/supplier/shared/types';
import { FocusAwareStatusBar } from '@/shared/components';
import { FormProvider } from '@/shared/providers/use-form-stepper-provider';

export default function Login() {
  const initialData = {
    email: '',
    password: '',
    state: 'email',
  };
  return (
    <>
      <FormProvider<LoginSupplierFormType> initialData={initialData}>
        <FocusAwareStatusBar />
        <LoginSupplier />
      </FormProvider>
    </>
  );
}
