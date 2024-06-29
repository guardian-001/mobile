import { Stack } from 'expo-router';
import React from 'react';

export default function SupplierLayout() {
  return (
    <Stack>
      <Stack.Screen name="(public)" options={{ headerShown: false }} />
      <Stack.Screen name="(private)" options={{ headerShown: false }} />
    </Stack>
  );
}
