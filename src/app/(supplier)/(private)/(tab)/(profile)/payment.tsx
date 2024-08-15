import React from 'react';

import { PaymentMethods } from '@/modules/supplier/profile/payment-methods';
import { FocusAwareStatusBar, View } from '@/shared/components';

export default function Payment() {
  return (
    <View className="flex-1">
      <FocusAwareStatusBar />
      <PaymentMethods />
    </View>
  );
}
