import { Stack } from 'expo-router';
import React from 'react';

import { BackButton } from '@/modules/shared';

export default function ClientPublicLayout() {
  return (
    <Stack initialRouteName="login">
      <Stack.Screen
        name="login"
        options={{
          headerTransparent: true,
          headerTitle: '',
          headerShown: true,
          headerLeft: () => <BackButton route={'init'} />,
        }}
      />
      <Stack.Screen
        name="reset-password"
        options={{
          headerTransparent: true,
          headerTitle: '',
          headerShown: true,
          headerLeft: () => <BackButton />,
        }}
      />
    </Stack>
  );
}
