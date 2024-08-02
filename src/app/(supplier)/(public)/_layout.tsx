import { Stack } from 'expo-router';
import React from 'react';

import { ScreenOptions } from '@/shared/components';

export default function SupplierPublicLayout() {
  return (
    <Stack initialRouteName="login">
      <Stack.Screen name="login" options={ScreenOptions({ route: '/(app)' })} />
      <Stack.Screen
        name="check-mail-banner"
        options={ScreenOptions({ route: '/(app)' })}
      />
      <Stack.Screen name="create-password" options={ScreenOptions({})} />
      <Stack.Screen
        name="reset-password-supplier"
        options={ScreenOptions({})}
      />
    </Stack>
  );
}
