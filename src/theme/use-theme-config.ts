import { useColorScheme } from 'nativewind';

import { useRouteName } from '../shared/hooks/use-get-route';
import { ArchitectDarkTheme, ArchitectLightTheme } from './architect-theme';
import { ClientDarkTheme, ClientLightTheme } from './client-theme';
import { DefaultDarkTheme, DefaultLightTheme } from './default-theme';
import { SupplierDarkTheme, SupplierLightTheme } from './supplier-theme';

export function useThemeConfig() {
  const userRoute = useRouteName() as
    | 'client'
    | 'architect'
    | 'supplier'
    | 'default';
  const { colorScheme } = useColorScheme();

  switch (userRoute) {
    case 'client':
      return colorScheme === 'dark' ? ClientDarkTheme : ClientLightTheme;
    case 'architect':
      return colorScheme === 'dark' ? ArchitectDarkTheme : ArchitectLightTheme;
    case 'supplier':
      return colorScheme === 'dark' ? SupplierDarkTheme : SupplierLightTheme;
    default:
      return colorScheme === 'dark' ? DefaultDarkTheme : DefaultLightTheme;
  }
}
