import type { StatusBarStyle } from 'expo-status-bar';
import { vars } from 'nativewind';

export type ThemesVariant = 'default' | 'client' | 'supplier' | 'architect';

export const Themes = {
  default: vars({
    '--color-primary': '#000000',
    '--color-secondary': '#9b6cca',
  }),
  supplier: vars({
    '--color-primary': '#FC5C63',
    '--color-secondary': '#FAFBFF',
  }),
  client: vars({
    '--color-primary': '#11ABEC',
    '--color-secondary': '#FAFBFF',
  }),
  architect: vars({
    '--color-primary': '#FC5C63',
    '--color-secondary': '#FAFBFF',
  }),
};

type StatusBarThemeStyle = {
  [keys in ThemesVariant]: {
    style: StatusBarStyle;
    background: string;
  };
};

export const StatusBarTheme: StatusBarThemeStyle = {
  default: {
    style: 'dark',
    background: '#fff',
  },
  supplier: {
    style: 'light',
    background: '#000',
  },
  client: {
    style: 'light',
    background: '#11ABEC',
  },
  architect: {
    style: 'dark',
    background: '#FC5C63',
  },
};
