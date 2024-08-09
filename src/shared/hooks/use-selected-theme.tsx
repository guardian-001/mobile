import * as SecureStore from 'expo-secure-store';
import { colorScheme, useColorScheme } from 'nativewind';
import { useCallback, useEffect, useState } from 'react';

const SELECTED_THEME = 'SELECTED_THEME';
export type ColorSchemeType = 'client' | 'architect' | 'supplier' | 'default';

export const useSelectedTheme = () => {
  const { colorScheme: _color, setColorScheme } = useColorScheme();
  const [theme, setTheme] = useState<ColorSchemeType>('default');

  useEffect(() => {
    const fetchTheme = async () => {
      const storedTheme = await SecureStore.getItemAsync(SELECTED_THEME);
      if (storedTheme) {
        setTheme(storedTheme as ColorSchemeType);
      }
    };

    fetchTheme();
  }, []);

  const setSelectedTheme = useCallback(
    async (t: ColorSchemeType) => {
      setColorScheme(t);
      setTheme(t);
      await SecureStore.setItemAsync(SELECTED_THEME, t);
    },
    [setColorScheme]
  );

  return { selectedTheme: theme, setSelectedTheme } as const;
};

// to be used in the root file to load the selected theme from SecureStore
export const loadSelectedTheme = async () => {
  const theme = await SecureStore.getItemAsync(SELECTED_THEME);
  if (theme) {
    colorScheme.set(theme as ColorSchemeType);
  }
};
