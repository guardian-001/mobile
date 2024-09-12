import React from 'react';
import { StyleSheet } from 'react-native';

import { GradientBackground } from './gradient-background';

export function SignupHeaderTitle() {
  return <GradientBackground style={styles.gradientBackground} />;
}

const styles = StyleSheet.create({
  gradientBackground: {
    position: 'absolute',
    display: 'flex',
    height: '12%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'white',
  },
});
