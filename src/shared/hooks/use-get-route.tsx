import { useSegments } from 'expo-router';
import { useEffect, useState } from 'react';

export const useRouteName = (): string => {
  const [routeName, setRouteName] = useState<string>('client');
  const route = useSegments();

  useEffect(() => {
    const getRouteName = async () => {
      const cleanRouteName =
        (route?.[0] || '').split('(')[1]?.slice(0, -1) || 'client';
      setRouteName(cleanRouteName);
    };

    getRouteName();
  }, [route]);

  return routeName;
};
