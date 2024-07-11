import { Stack } from 'expo-router';
import React from 'react';

export default function ClientPrivateLayout() {
  return (
    <Stack initialRouteName="(tab)">
      <Stack.Screen name="(tab)" options={{ headerShown: false }} />
      <Stack.Screen name="(profile)" options={{ headerShown: false }} />
      <Stack.Screen name="(projet)" options={{ headerShown: false }} />
    </Stack>
  );
}
