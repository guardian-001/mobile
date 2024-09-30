import { Stack } from 'expo-router';
import React from 'react';

import { ScreenOptions } from '@/shared/components';

export default function ClientPrivateLayout() {
  return (
    <Stack initialRouteName="(tab)">
      <Stack.Screen name="(tab)" options={ScreenOptions({ type: 'custom' })} />
      <Stack.Screen
        name="(profile)"
        options={ScreenOptions({ type: 'custom' })}
      />
      <Stack.Screen
        name="(announcement)"
        options={ScreenOptions({ type: 'custom' })}
      />
      <Stack.Screen
        name="(architect-profile)"
        options={ScreenOptions({ type: 'custom' })}
      />
      <Stack.Screen
        name="(supplier-profile)"
        options={ScreenOptions({ type: 'custom' })}
      />
      <Stack.Screen
        name="(inspiration)"
        options={ScreenOptions({ type: 'custom' })}
      />
    </Stack>
  );
}
