import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';

import { getStatus } from '@/core/auth/utils';
export const useHome = () => {
  const router = useRouter();
  const [appStatus, setAppStatus] = useState<Promise<String | null>>();
  useEffect(() => {
    setAppStatus(getStatus());
  }, []);

  return { appStatus, router };
};
