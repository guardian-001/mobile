import { useRouter } from 'expo-router';

import { useGetCollectionsApi } from '@/api/supplier/catalogue/use-get-collections';
import { useAuth, useCustomForm } from '@/core';

import { collectionIdSchema } from '../schemas/collection-schema';


export const useProfileCatalogue = () => {
  const router = useRouter();
  const logOut = useAuth.use.signOut();

  const {
    data: CollectionData,
    isError: isErrorCollection,
    isLoading: isLoadingCollection,
    isSuccess: isSuccessCollection,
  } = useGetCollectionsApi();
  const { control } = useCustomForm(collectionIdSchema, {
    collection: 35,
  });


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
    CollectionData,
    isErrorCollection,
    isLoadingCollection,
    isSuccessCollection,
    control,

  };
};
