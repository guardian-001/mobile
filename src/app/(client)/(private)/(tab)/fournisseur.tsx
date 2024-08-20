import React from 'react';

import SupplierPage from '@/modules/client/supplier/supplier';
import { FocusAwareStatusBar, View } from '@/shared/components';

export default function Fournisseur() {
  return (
    <View className="flex-1">
      <FocusAwareStatusBar />
      <SupplierPage />
    </View>
  );
}
