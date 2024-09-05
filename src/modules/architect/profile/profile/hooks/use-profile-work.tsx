import { useRouter } from 'expo-router';

export const useProfileWork = () => {
  const router = useRouter();
  const navigateToRealization = () => {
    router.push('(architect)/(private)/realize-project');
  };
  return {
    navigateToRealization,
  };
};
