import React from 'react';

import { HistoricalBilling } from '@/modules/supplier/profile/historical-billing';
import { FocusAwareStatusBar, View } from '@/shared/components';

export default function Billing() {
  return (
    <View className="flex-1">
      <FocusAwareStatusBar />
      <HistoricalBilling />
    </View>
  );
}
