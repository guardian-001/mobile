import { SplashScreen, Stack } from 'expo-router';
import React, { useCallback, useEffect } from 'react';

import { useAuth } from '@/core';
import { ScreenOptions } from '@/shared/components';

export default function TabLayout() {
  const status = useAuth.use.status();
  const hideSplash = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, []);
  useEffect(() => {
    if (status !== 'idle') {
      setTimeout(() => {
        hideSplash();
      }, 1000);
    }
  }, [hideSplash, status]);

  return (
    <Stack initialRouteName="index">
      <Stack.Screen name="index" options={ScreenOptions({ type: 'custom' })} />
    </Stack>
  );
}
