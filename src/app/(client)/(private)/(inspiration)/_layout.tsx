import { Stack } from 'expo-router';
import React from 'react';

import { ScreenOptions } from '@/shared/components';

export default function ProfileLayout() {
  return (
    <Stack initialRouteName="inspiration">
      <Stack.Screen name="inspiration" options={ScreenOptions({})} />
    </Stack>
  );
}
