import React from 'react';
import { StyleSheet } from 'react-native';

import ProjectRealizationStepper from '@/modules/architect/realization/realization-stepper';
import { FocusAwareStatusBar, GradientBackground } from '@/shared/components';

export default function RealizeProjet() {
  return (
    <GradientBackground style={styles.gradientBachgroud}>
      <FocusAwareStatusBar />
      <ProjectRealizationStepper />
    </GradientBackground>
  );
}
const styles = StyleSheet.create({
  gradientBachgroud: { flex: 1, alignItems: 'center' },
});
