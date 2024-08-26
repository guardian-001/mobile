import React from 'react';

import ProjectDetails from '@/modules/client/inspiration/architect-profile/project-details';
import { FocusAwareStatusBar, View } from '@/shared/components';

export default function Project() {
  return (
    <View className="flex-1">
      <FocusAwareStatusBar />
      <ProjectDetails />
    </View>
  );
}
