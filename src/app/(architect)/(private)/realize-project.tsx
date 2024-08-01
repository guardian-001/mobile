import React from 'react';

import ProjectRealizationStepper from '@/modules/architect/realization/realization-stepper';
import { FocusAwareStatusBar, GradientBackground } from '@/shared/components';

export default function RealizeProjet() {
  return (
    <GradientBackground style={{ flex: 1, alignItems: 'center' }}>
      <FocusAwareStatusBar />
      <ProjectRealizationStepper />
    </GradientBackground>
  );
}
