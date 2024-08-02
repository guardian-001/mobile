import React from 'react';

import { useSoftKeyboardEffect } from '@/core/keyboard';
import CreatePassFromLink from '@/modules/supplier/password-creation/create-password';
import { FocusAwareStatusBar } from '@/shared/components';

export default function CreatePassword() {
  useSoftKeyboardEffect();

  return (
    <>
      <FocusAwareStatusBar />
      <CreatePassFromLink />
    </>
  );
}
