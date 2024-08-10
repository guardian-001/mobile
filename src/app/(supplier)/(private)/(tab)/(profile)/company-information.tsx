import React from 'react';

import { CompanyInfoForm } from '@/modules/supplier/profile/company-info-form';
import { FocusAwareStatusBar, View } from '@/shared/components';

export default function CompanyInformation() {
  return (
    <View className="flex-1">
      <FocusAwareStatusBar />
      <CompanyInfoForm />
    </View>
  );
}
