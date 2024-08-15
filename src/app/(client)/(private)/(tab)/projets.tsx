import React from 'react';

import MyProjects from '@/modules/client/projets/projets';
import { FocusAwareStatusBar, View } from '@/shared/components';

export default function Projets() {
  return (
    <View className="flex-1">
      <FocusAwareStatusBar />
      <MyProjects />
    </View>
  );
}
