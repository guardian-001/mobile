import type { AxiosError, AxiosResponse } from 'axios';
import { createMutation } from 'react-query-kit';

import { reportAsync } from '@/services/shared/architect-services';
import type { ReviewRequest } from '@/types/architect';

export const useReportApi = createMutation<
  AxiosResponse,
  ReviewRequest,
  AxiosError
>({
  mutationKey: ['report'],
  mutationFn: reportAsync,
});
