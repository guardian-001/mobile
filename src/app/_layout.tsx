/* eslint-disable react/react-in-jsx-scope */
import { useReactNavigationDevTools } from '@dev-plugins/react-navigation';
import { SplashScreen, Stack, useNavigationContainerRef } from 'expo-router';

import { hydrateAuth, loadSelectedTheme } from '@/core';

export { ErrorBoundary } from 'expo-router';
import '../../global.css';

import { ScreenOptions } from '@/shared/components';
import AppProvider from '@/shared/providers/app-provider';

export const unstable_settings = {
  initialRouteName: '(app)',
};

hydrateAuth();
loadSelectedTheme();
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const navigationRef = useNavigationContainerRef();
  useReactNavigationDevTools(navigationRef);
  return (
    <AppProvider>
      <Stack initialRouteName="(app)">
        <Stack.Screen
          name="(app)"
          options={ScreenOptions({ type: 'custom' })}
        />
        <Stack.Screen
          name="(architect)"
          options={ScreenOptions({ type: 'custom' })}
        />
        <Stack.Screen
          name="(client)"
          options={ScreenOptions({ type: 'custom' })}
        />
        <Stack.Screen
          name="(supplier)"
          options={ScreenOptions({ type: 'custom' })}
        />
      </Stack>
    </AppProvider>
  );
}
