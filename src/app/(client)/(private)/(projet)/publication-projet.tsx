import React from 'react';

import ProjectRealizationStepper from '@/modules/architect/realization/realization-stepper';
import { FocusAwareStatusBar, GradientBackground } from '@/shared/components';

export default function PublicationProjet() {
  return (
    <GradientBackground className="flex-1 items-center">
      <FocusAwareStatusBar />
      <ProjectRealizationStepper />
    </GradientBackground>
  );
}
