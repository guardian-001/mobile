import { Stack } from 'expo-router';
import React from 'react';

import { ScreenOptions } from '@/shared/components';

export default function SupplierPrivateLayout() {
  return (
    <Stack initialRouteName="complete-account">
      <Stack.Screen
        name="complete-account"
        options={ScreenOptions({ type: 'custom' })}
      />
    </Stack>
  );
}
