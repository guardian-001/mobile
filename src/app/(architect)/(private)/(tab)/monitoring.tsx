import React from 'react';
import { StyleSheet } from 'react-native';

import {
  colors,
  FocusAwareStatusBar,
  GradientBackground,
  Text,
} from '@/shared/components';

export default function Monitoring() {
  return (
    <GradientBackground
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 0 }}
      style={styles.gradientBachgroud}
      colors={[colors['ice-Blue'], colors['light-blue']]}
    >
      <FocusAwareStatusBar />
      <Text>Monitoring</Text>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  gradientBachgroud: { flex: 1 },
});
