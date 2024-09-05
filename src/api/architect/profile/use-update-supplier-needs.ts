import type { AxiosError, AxiosResponse } from 'axios';
import { createMutation } from 'react-query-kit';

import { updateArchitectNeedsAsync } from '@/services/shared/architect-services';

export const useUpdateArchitectNeedsApi = createMutation<
  AxiosResponse,
  string[],
  AxiosError
>({
  mutationKey: ['updateArchitectNeeds'],
  mutationFn: updateArchitectNeedsAsync,
});
