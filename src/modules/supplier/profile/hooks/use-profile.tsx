import { useRouter } from 'expo-router';

import { useAuth } from '@/core';

export const useProfileSupplier = () => {
  const router = useRouter();
  const logOut = useAuth.use.signOut();

  const navigateTo = (path: string) => {
    router.push(`/(supplier)/(private)/${path}`);
  };
  const logoutHandler = (route: string) => {
    logOut();
    router.replace(route);
  };
  return {
    navigateTo,
    logoutHandler,
  };
};
