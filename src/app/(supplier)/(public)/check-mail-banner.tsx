import React from 'react';

import { useSoftKeyboardEffect } from '@/core/keyboard';
import CheckMailBanner from '@/modules/supplier/login/check-mail-banner';
import { FocusAwareStatusBar } from '@/shared/components';

export default function MailNotFound() {
  useSoftKeyboardEffect();

  return (
    <>
      <FocusAwareStatusBar />
      <CheckMailBanner />
    </>
  );
}
