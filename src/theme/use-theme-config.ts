import { useRouteName } from '../shared/hooks/use-get-route';
import { ArchitectLightTheme } from './architect-theme';
import { ClientLightTheme } from './client-theme';
import { DefaultLightTheme } from './default-theme';
import { SupplierLightTheme } from './supplier-theme';

export function useThemeConfig() {
  const userRoute = useRouteName() as
    | 'client'
    | 'architect'
    | 'supplier'
    | 'default';

  switch (userRoute) {
    case 'client':
      return ClientLightTheme;
    case 'architect':
      return ArchitectLightTheme;
    case 'supplier':
      return SupplierLightTheme;
    default:
      return DefaultLightTheme;
  }
}
