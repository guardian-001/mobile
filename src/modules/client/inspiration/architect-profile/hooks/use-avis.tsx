import { useArchitectReviewApi } from '@/api/architect/profile/use-review';

export const useAvis = () => {
  const {
    data: reviewsApiData,
    isError,
    isLoading,
    isSuccess,
  } = useArchitectReviewApi();
  return {
    reviewsApiData,
    isError,
    isLoading,
    isSuccess,
  };
};
