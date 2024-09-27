import React from 'react';

import SupplierTab from '@/modules/architect/supplier-tab/supplier';
import { FocusAwareStatusBar, View } from '@/shared/components';

export default function Supplier() {
  return (
    <View className="h-full w-full flex-1 items-center justify-center">
      <FocusAwareStatusBar />
      <SupplierTab />
    </View>
  );
}
