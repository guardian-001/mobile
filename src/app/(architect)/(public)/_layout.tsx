import { Stack } from 'expo-router';
import React from 'react';

import { ScreenOptions } from '@/shared/components';

export default function ArchitectPublicLayout() {
  return (
    <Stack initialRouteName="login">
      <Stack.Screen name="login" options={ScreenOptions('/onboarding')} />
      <Stack.Screen name="reset-password" options={ScreenOptions()} />
      <Stack.Screen
        name="signup"
        options={ScreenOptions('(architect)/(public)/login')}
      />
    </Stack>
  );
}
