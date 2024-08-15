import React from 'react';

import { TransactionHistory } from '@/modules/supplier/profile/transaction-history ';
import { FocusAwareStatusBar, View } from '@/shared/components';

export default function Transaction() {
  return (
    <View className="flex-1">
      <FocusAwareStatusBar />
      <TransactionHistory />
    </View>
  );
}
