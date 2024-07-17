import { Stack } from 'expo-router';
import React from 'react';

import { ScreenOptions } from '@/shared/components';

export default function SupplierPublicLayout() {
  return (
    <Stack initialRouteName="login">
      <Stack.Screen name="login" options={ScreenOptions('/onboarding')} />
      <Stack.Screen name="reset-password-client" options={ScreenOptions()} />
    </Stack>
  );
}
