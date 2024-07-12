import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import PublicationProjetStepper from '@/modules/client/pubication-projet/publication-projet-stepper';
import { colors, FocusAwareStatusBar } from '@/shared/components';

export default function PublicationProjet() {
  return (
    <LinearGradient
      start={{ x: 0, y: 1 }}
      end={{ x: 0, y: 0 }}
      colors={[colors.background, colors['light-blue']]}
      className="flex-1 items-center"
    >
      <FocusAwareStatusBar />
      <PublicationProjetStepper />
    </LinearGradient>
  );
}
