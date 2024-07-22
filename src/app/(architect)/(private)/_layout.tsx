import { Stack } from 'expo-router';
import React from 'react';

export default function ArchitectPrivateLayout() {
  return (
    <Stack initialRouteName="profile">
      <Stack.Screen name="profile" options={{ headerShown: false }} />
      <Stack.Screen name="realize-project" options={{ headerShown: false }} />
    </Stack>
  );
}
