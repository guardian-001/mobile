import type { Theme } from '@react-navigation/native';
import { DarkTheme, DefaultTheme } from '@react-navigation/native';

const ClientLightTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#11ABEC',
    background: '#FAFBFF',
  },
};

const ClientDarkTheme: Theme = {
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

export { ClientDarkTheme, ClientLightTheme };
