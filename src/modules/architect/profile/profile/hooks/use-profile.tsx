import { useRouter } from 'expo-router';

import { useAuth } from '@/core';

export const useProfileArchitect = () => {
  const router = useRouter();
  const logOut = useAuth.use.signOut();

  const logoutHandler = (route: string) => {
    logOut();
    router.replace(route);
  };
  return {
    logoutHandler,
  };
};
