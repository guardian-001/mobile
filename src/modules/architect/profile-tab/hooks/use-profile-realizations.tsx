import { useArchitectProfileRealizationsApi } from '@/api/architect/profile/use-profile-realizations';

export const useProfileRealizations = () => {
  const { data, isError, isLoading, isPending, isSuccess, refetch } =
    useArchitectProfileRealizationsApi();

  return {
    realizations: data?.results,
    isError,
    isLoading,
    isPending,
    isSuccess,
    refetch,
  };
};
