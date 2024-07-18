import { Stack } from 'expo-router';
import React from 'react';

import { ScreenOptions } from '@/shared/components';

export default function ProjetLayout() {
  return (
    <Stack initialRouteName="publication-projet">
      <Stack.Screen
        name="publication-projet"
        options={ScreenOptions({ type: 'custom' })}
      />
    </Stack>
  );
}
