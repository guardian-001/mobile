import { clsx } from 'clsx';
import React from 'react';
import { createContext, useContext } from 'react';
import type { ViewProps } from 'react-native';
import { View } from 'react-native';

import { useRouteName } from '@/shared/hooks/use-get-route';

import type { ThemesVariant } from './theme-config';
import { Themes } from './theme-config';

type ThemeContextValues = {
  theme: ThemesVariant;
};

const ThemeProviderValues = createContext<ThemeContextValues>({
  theme: 'default',
});

export function useThemeContextValues() {
  return useContext(ThemeProviderValues);
}

type ThemeContextActions = {
  handleThemeSwitch: (newTheme: ThemesVariant) => void;
};

const ThemeProviderActions = createContext<ThemeContextActions>(
  {} as ThemeContextActions
);

export function useThemeContextActions() {
  return useContext(ThemeProviderActions);
}

type ThemeProps = ViewProps;

export function Theme(props: ThemeProps) {
  const theme = useRouteName() as
    | 'client'
    | 'architect'
    | 'supplier'
    | 'default';

  console.log(theme);

  return (
    <View style={Themes[theme]} className={clsx('flex-1', props.className)}>
      <ThemeProviderValues.Provider value={{ theme }}>
        {props.children}
      </ThemeProviderValues.Provider>
    </View>
  );
}
