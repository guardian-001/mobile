import React from 'react';

import CreatePassFromLink from '@/modules/supplier/password-creation/create-password';
import { FocusAwareStatusBar } from '@/shared/components';

export default function CreatePassword() {
  return (
    <>
      <FocusAwareStatusBar />
      <CreatePassFromLink />
    </>
  );
}
