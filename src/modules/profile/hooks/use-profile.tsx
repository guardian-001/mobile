import { useRouter } from 'expo-router';

import { useAuth } from '@/core';

export const useProfileClient = () => {
  const router = useRouter();
  const logOut = useAuth.use.signOut();

  const navigateTo = (path: string) => {
    router.push(`/(client)/(private)/${path}`);
  };
  const logoutHandler = (route: string) => {
    logOut();
    router.push(route);
  };
  return {
    navigateTo,
    logoutHandler,
  };
};
