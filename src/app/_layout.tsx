/* eslint-disable react/react-in-jsx-scope */
import { useReactNavigationDevTools } from '@dev-plugins/react-navigation';
import { SplashScreen, Stack, useNavigationContainerRef } from 'expo-router';

import { hydrateAuth, loadSelectedTheme } from '@/core';

export { ErrorBoundary } from 'expo-router';

import '../../global.css';

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
      <Stack>
        <Stack.Screen name="(app)" options={{ headerShown: false }} />
        <Stack.Screen name="(architect)" options={{ headerShown: false }} />
        <Stack.Screen name="(client)" options={{ headerShown: false }} />
        <Stack.Screen name="(supplier)" options={{ headerShown: false }} />
        <Stack.Screen name="onboarding" options={{ headerShown: false }} />
      </Stack>
    </AppProvider>
  );
}
