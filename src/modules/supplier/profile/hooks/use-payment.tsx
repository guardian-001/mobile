import { useRouter } from 'expo-router';

export const usePayment = () => {
  const router = useRouter();

  const navigateTo = (path: string) => {
    router.push(`/(supplier)/(private)/(tab)/(profile)/${path}`);
  };

  return {
    navigateTo,
  };
};
