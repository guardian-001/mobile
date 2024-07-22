import React from 'react';

import CreateAnnouncementStepper from '@/modules/client/create-announcement/create-announcement-stepper';
import { FocusAwareStatusBar, GradientBackground } from '@/shared/components';

export default function CreateAnnouncement() {
  return (
    <GradientBackground className="flex-1 items-center">
      <FocusAwareStatusBar />
      <CreateAnnouncementStepper />
    </GradientBackground>
  );
}
