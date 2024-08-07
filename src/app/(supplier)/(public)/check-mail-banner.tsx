import React from 'react';

import CheckMailBanner from '@/modules/supplier/login/check-mail-banner';
import { FocusAwareStatusBar } from '@/shared/components';

export default function MailNotFound() {
  return (
    <>
      <FocusAwareStatusBar />
      <CheckMailBanner />
    </>
  );
}
