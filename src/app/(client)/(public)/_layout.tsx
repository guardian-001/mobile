import { Stack } from 'expo-router';
import React from 'react';

import { ScreenOptions } from '@/shared/components';

export default function ClientPublicLayout() {
  return (
    <Stack initialRouteName="login">
      <Stack.Screen name="login" options={ScreenOptions({})} />
      <Stack.Screen name="reset-password" options={ScreenOptions({})} />
    </Stack>
  );
}
