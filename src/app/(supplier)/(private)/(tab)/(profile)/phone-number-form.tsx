import React from 'react';

import { UpdatePhoneNumberForm } from '@/modules/supplier/profile/update-phone-number-form';
import { FocusAwareStatusBar, View } from '@/shared/components';

export default function PhoneNumberForm() {
  return (
    <View className="flex-1">
      <FocusAwareStatusBar />
      <UpdatePhoneNumberForm />
    </View>
  );
}
