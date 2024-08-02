import { Stack } from 'expo-router';
import React from 'react';

import { ScreenOptions } from '@/shared/components';

export default function SupplierPrivateLayout() {
  return (
    <Stack>
      <Stack.Screen name="(complete)" options={ScreenOptions({})} />
      <Stack.Screen name="(profile)" options={ScreenOptions({})} />
    </Stack>
  );
}
