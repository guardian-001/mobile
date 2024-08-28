import { useRouter } from 'expo-router';

export const useCollection = () => {
  const router = useRouter();

  const navigateTo = () => {
    router.push('/(supplier)/(private)/(collection)/collection');
  };

  return {
    navigateTo,
  };
};
