import React from 'react';

import { BankTransfer } from '@/modules/supplier/profile/bank-transfer';
import { FocusAwareStatusBar, View } from '@/shared/components';

export default function Transfer() {
  return (
    <View className="flex-1">
      <FocusAwareStatusBar />
      <BankTransfer />
    </View>
  );
}
