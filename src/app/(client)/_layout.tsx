import { Stack } from 'expo-router';
import React from 'react';

import { ScreenOptions } from '@/shared/components';

export default function ClientLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(public)"
        options={ScreenOptions({ type: 'custom' })}
      />
      <Stack.Screen
        name="(private)"
        options={ScreenOptions({ type: 'custom' })}
      />
    </Stack>
  );
}
