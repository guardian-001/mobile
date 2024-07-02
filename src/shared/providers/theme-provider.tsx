/* eslint-disable react/react-in-jsx-scope */
import { ThemeProvider as RNThemeProvider } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { Theme } from '@/theme';
import { useThemeConfig } from '@/theme/use-theme-config';

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useThemeConfig();
  return (
    <GestureHandlerRootView
      style={styles.container}
      className={theme.dark ? `dark` : undefined}
    >
      <RNThemeProvider value={theme}>
        <Theme>{children}</Theme>
      </RNThemeProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ThemeProvider;
