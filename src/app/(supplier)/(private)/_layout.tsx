import { Stack } from 'expo-router';
import React from 'react';

import { ScreenOptions } from '@/shared/components';

export default function SupplierPrivateLayout() {
  return (
    <Stack initialRouteName="index">
      <Stack.Screen
        name="index"
        options={{
          title: 'Supplier Space',
        }}
      />
      <Stack.Screen name="(complete)" options={ScreenOptions({})} />
      <Stack.Screen name="(profile)" options={ScreenOptions({})} />
    </Stack>
  );
}
