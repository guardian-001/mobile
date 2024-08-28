import React from 'react';
import { StyleSheet } from 'react-native';

import { EditCollection } from '@/modules/supplier/collections/edit-collection';
import {
  colors,
  FocusAwareStatusBar,
  GradientBackground,
} from '@/shared/components';

export default function CompleteAccount() {
  return (
    <GradientBackground
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 0 }}
      style={styles.gradientBachgroud}
      colors={[colors['ice-Blue'], colors['light-blue']]}
    >
      <FocusAwareStatusBar />
      <EditCollection />
    </GradientBackground>
  );
}
const styles = StyleSheet.create({
  gradientBachgroud: { flex: 1 },
});
