import { Stack } from 'expo-router';
import React from 'react';

import { ScreenOptions } from '@/shared/components';

export default function ProfileLayout() {
  return (
    <Stack initialRouteName="profile">
      <Stack.Screen
        name="profile"
        options={ScreenOptions({ type: 'custom' })}
      />
      <Stack.Screen name="basic-information" options={ScreenOptions({})} />
      <Stack.Screen name="company-information" options={ScreenOptions({})} />
      <Stack.Screen name="notification" options={ScreenOptions({})} />
      <Stack.Screen name="reset-password-client" options={ScreenOptions({})} />
      <Stack.Screen name="email-form" options={ScreenOptions({})} />
      <Stack.Screen name="phone-number-form" options={ScreenOptions({})} />
      <Stack.Screen name="bio-form" options={ScreenOptions({})} />
      <Stack.Screen name="presentation-video" options={ScreenOptions({})} />
      <Stack.Screen
        name="update-password-supplier"
        options={ScreenOptions({})}
      />
    </Stack>
  );
}
