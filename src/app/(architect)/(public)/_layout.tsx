import { Stack } from 'expo-router';
import React from 'react';

import { translate } from '@/core';

export default function ClientPublicLayout() {
  return (
    <Stack initialRouteName="login">
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen
        name="reset-password"
        options={{
          title: translate('resetpass.reset'),
          headerTitleAlign: 'center',
        }}
      />
    </Stack>
  );
}
