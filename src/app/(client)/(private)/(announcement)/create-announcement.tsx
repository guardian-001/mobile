import React from 'react';

import CreateAnnouncementStepper from '@/modules/client/create-announcement/create-announcement-stepper';
import {
  colors,
  FocusAwareStatusBar,
  GradientBackground,
} from '@/shared/components';

export default function CreateAnnouncement() {
  return (
    <GradientBackground
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 0 }}
      style={{ flex: 1, alignItems: 'center' }}
      colors={[colors['ice-Blue'], colors['light-blue']]}
    >
      <FocusAwareStatusBar />
      <CreateAnnouncementStepper />
    </GradientBackground>
  );
}
