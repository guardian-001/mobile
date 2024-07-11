import { Stack } from 'expo-router';
import React from 'react';

export default function ProjetLayout() {
  return (
    <Stack initialRouteName="publication-projet">
      <Stack.Screen
        name="publication-projet"
        options={{ headerShown: false }}
      />
    </Stack>
  );
}
