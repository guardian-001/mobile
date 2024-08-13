import React from 'react';

import { UpdateBioForm } from '@/modules/supplier/profile/update-bio-form';
import { FocusAwareStatusBar, View } from '@/shared/components';

export default function BioForm() {
  return (
    <View className="flex-1">
      <FocusAwareStatusBar />
      <UpdateBioForm />
    </View>
  );
}
