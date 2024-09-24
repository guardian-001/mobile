import { Stack } from 'expo-router';
import React from 'react';

import { ScreenOptions } from '@/shared/components';

export default function SupplierPrivateLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(complete)"
        options={ScreenOptions({ backGesture: false })}
      />
      <Stack.Screen
        name="(tab)"
        options={ScreenOptions({ type: 'custom', backGesture: false })}
      />
      <Stack.Screen
        name="(collection)"
        options={ScreenOptions({ type: 'custom', backGesture: false })}
      />
    </Stack>
  );
}
