import { useRouter } from 'expo-router';

import { useAuth } from '@/core';

export const useProfile = () => {
  const router = useRouter();
  const logOut = useAuth.use.signOut();
  const onPressHandler = (route: string) => {
    router.push(route);
  };
  const logoutHandler = (route: string) => {
    logOut();
    router.push(route);
  };
  return {
    onPressHandler,
    logoutHandler,
  };
};
