import { Stack } from 'expo-router';
import React from 'react';

import { ScreenOptions } from '@/shared/components';

export default function ArchitectPrivateLayout() {
  return (
    <Stack initialRouteName="profile">
      <Stack.Screen name="(tab)" options={ScreenOptions({ type: 'custom' })} />
      <Stack.Screen
        name="(supplier-profile)"
        options={ScreenOptions({ type: 'custom' })}
      />

      <Stack.Screen
        name="realize-project"
        options={ScreenOptions({ type: 'custom' })}
      />
    </Stack>
  );
}
