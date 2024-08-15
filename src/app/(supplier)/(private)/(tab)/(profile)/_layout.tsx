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
      <Stack.Screen name="reset-password-client" options={ScreenOptions({})} />
      <Stack.Screen name="email-form" options={ScreenOptions({})} />
      <Stack.Screen name="phone-number-form" options={ScreenOptions({})} />
      <Stack.Screen name="bio-form" options={ScreenOptions({})} />
      <Stack.Screen name="presentation-video" options={ScreenOptions({})} />
      <Stack.Screen name="social-links" options={ScreenOptions({})} />
      <Stack.Screen name="subscription" options={ScreenOptions({})} />
      <Stack.Screen name="billing" options={ScreenOptions({})} />
      <Stack.Screen name="payment" options={ScreenOptions({})} />
      <Stack.Screen
        name="update-password-supplier"
        options={ScreenOptions({})}
      />
      <Stack.Screen name="bank-card" options={ScreenOptions({})} />
      <Stack.Screen name="transaction" options={ScreenOptions({})} />
      <Stack.Screen name="transfer" options={ScreenOptions({})} />
    </Stack>
  );
}
