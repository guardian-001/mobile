import type { Theme } from '@react-navigation/native';
import { DarkTheme, DefaultTheme } from '@react-navigation/native';

const SupplierLightTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FC5C63',
    background: '#FAFBFF',
  },
};

const SupplierDarkTheme: Theme = {
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

export { SupplierDarkTheme, SupplierLightTheme };
