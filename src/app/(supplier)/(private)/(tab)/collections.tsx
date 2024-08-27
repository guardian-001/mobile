import React from 'react';
import { StyleSheet } from 'react-native';

import { CollectionManagement } from '@/modules/supplier/collections/collections';
import {
  colors,
  FocusAwareStatusBar,
  GradientBackground,
} from '@/shared/components';

export default function Collections() {
  return (
    <GradientBackground
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 0 }}
      style={styles.gradientBachgroud}
      colors={[colors['ice-Blue'], colors['light-blue']]}
    >
      <FocusAwareStatusBar />
      <CollectionManagement />
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  gradientBachgroud: { flex: 1 },
});
