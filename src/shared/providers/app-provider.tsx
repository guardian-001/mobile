/* eslint-disable react/react-in-jsx-scope */
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import FlashMessage from 'react-native-flash-message';

import { APIProvider } from '@/api';

import ThemeProvider from './theme-provider';

function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <APIProvider>
        <BottomSheetModalProvider>
          {children}
          <FlashMessage position="top" />
        </BottomSheetModalProvider>
      </APIProvider>
    </ThemeProvider>
  );
}

export default AppProvider;
