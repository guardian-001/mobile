import React from 'react';

import { UpdateEmailForm } from '@/modules/supplier/profile/update-email-form';
import { FocusAwareStatusBar, View } from '@/shared/components';

export default function EmailForm() {
  return (
    <View className="flex-1">
      <FocusAwareStatusBar />
      <UpdateEmailForm />
    </View>
  );
}
