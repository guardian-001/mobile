import { Stack } from 'expo-router';
import React from 'react';

import { ScreenOptions } from '@/shared/components';

export default function ProfileLayout() {
  return (
    <Stack initialRouteName="profile">
      <Stack.Screen
        name="profile"
        options={ScreenOptions('(client)/(private)/(tab)/index')}
      />
      <Stack.Screen name="basic-information" options={ScreenOptions()} />
      <Stack.Screen name="notification" options={ScreenOptions()} />
      <Stack.Screen name="reset-password-client" options={ScreenOptions()} />
    </Stack>
  );
}
