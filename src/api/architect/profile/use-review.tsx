import type { AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';

import type { Variables } from '@/api/types';
import { getArchitectReview } from '@/services/shared/architect-services';

type Response = any;
export const useArchitectReviewApi = createQuery<
  Response,
  Variables,
  AxiosError
>({
  queryKey: ['architectReview'],
  fetcher: getArchitectReview,
});
