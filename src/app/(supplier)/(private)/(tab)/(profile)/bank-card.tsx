import React from 'react';

import { BankCardForm } from '@/modules/supplier/profile/bank-card-form';
import { FocusAwareStatusBar, View } from '@/shared/components';

export default function BankCard() {
  return (
    <View className="flex-1">
      <FocusAwareStatusBar />
      <BankCardForm />
    </View>
  );
}
