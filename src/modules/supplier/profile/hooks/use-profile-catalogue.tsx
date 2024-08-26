import { useRouter } from 'expo-router';

import { useAuth } from '@/core';

export const useProfileCatalogue = () => {
  const router = useRouter();
  const logOut = useAuth.use.signOut();

  // const {
  //   data: CollectionData,
  //   isError: isErrorCollection,
  //   isLoading: isLoadingCollection,
  //   isSuccess: isSuccessCollection,
  // } = useCollectionsApi();

  const navigateTo = (path: string) => {
    router.push(`/(supplier)/(private)/(tab)/${path}`);
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
