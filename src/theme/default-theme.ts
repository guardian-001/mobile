import type { Theme } from '@react-navigation/native';
import { DarkTheme, DefaultTheme } from '@react-navigation/native';

const DefaultLightTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#969696',
    background: '#FFFFFF',
  },
};

const DefaultDarkTheme: Theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#FFA766',
    background: '#121212',
    text: '#E5E5E5',
    border: '#7D7D7D',
    card: '#2E2E2E',
  },
};

export { DefaultDarkTheme, DefaultLightTheme };
