import { useArchitectReviewApi } from '@/api/architect/profile/use-review';

export const useAvis = () => {
  const {
    data: Reviews,
    isError,
    isLoading,
    isSuccess,
  } = useArchitectReviewApi();
  return {
    Reviews,
    isError,
    isLoading,
    isSuccess,
  };
};
