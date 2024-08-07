import * as SecureStore from 'expo-secure-store';
import { useEffect, useState } from 'react';

import { IS_FIRST_TIME } from '../constants';

export const useIsFirstTime = () => {
  const [isFirstTime, setIsFirstTime] = useState<boolean | null>(null);

  useEffect(() => {
    const fetchIsFirstTime = async () => {
      const storedValue = await SecureStore.getItemAsync(IS_FIRST_TIME);
      if (storedValue === null) {
        setIsFirstTime(true);
      } else {
        setIsFirstTime(storedValue === 'true');
      }
    };

    fetchIsFirstTime();
  }, []);

  const updateIsFirstTime = async (value: boolean) => {
    await SecureStore.setItemAsync(IS_FIRST_TIME, JSON.stringify(value));
    setIsFirstTime(value);
  };

  if (isFirstTime === null) {
    return [true, updateIsFirstTime] as const;
  }

  return [isFirstTime, updateIsFirstTime] as const;
};
