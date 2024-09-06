import type { AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';

import type { Variables } from '@/api/types';
import { getArchitectProfileClientReviews } from '@/services/shared/architect-services';
import type { Review } from '@/types/architect';

type Response = Review[];
export const useArchitectProfileClientReviewApi = createQuery<
  Response,
  Variables,
  AxiosError
>({
  queryKey: ['architectProfileClientReview'],
  fetcher: getArchitectProfileClientReviews,
});
