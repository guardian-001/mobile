import { useArchitectProfileClientReviewApi } from '@/api/architect/profile/use-profile-client-reviews';

export const useGetClientReview = () => {
  const { isLoading, isSuccess, isPending, isError, data } =
    useArchitectProfileClientReviewApi();

  return {
    isLoading,
    isPending,
    isSuccess,
    isError,
    clientsReviews: data,
  };
};
