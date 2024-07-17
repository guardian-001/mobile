import React from 'react';

import PublicationProjetStepper from '@/modules/client/pubication-projet/publication-projet-stepper';
import { FocusAwareStatusBar, GradientBackground } from '@/shared/components';

export default function PublicationProjet() {
  return (
    <GradientBackground className="flex-1 items-center">
      <FocusAwareStatusBar />
      <PublicationProjetStepper />
    </GradientBackground>
  );
}
