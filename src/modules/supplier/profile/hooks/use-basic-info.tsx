import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';

import type { User } from '@/api/auth';
import { getUser } from '@/core/auth/utils';

export const useBasicInfo = () => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  const navigateTo = (path: string) => {
    router.push(`/(supplier)/(private)/(tab)/(profile)/${path}`);
  };

  useEffect(() => {
    const fetchUser = async () => {
      const fetchedUser = await getUser();
      setUser(fetchedUser);
    };

    fetchUser();
  }, []);

  return {
    user,
    navigateTo,
  };
};
