import type { AxiosError, AxiosResponse } from 'axios';
import { createMutation } from 'react-query-kit';

import { deleteCollectionAsync } from '@/services/shared/supplier-services';

export const useDeleteCollectionApi = createMutation<
  AxiosResponse,
  string,
  AxiosError
>({
  mutationFn: deleteCollectionAsync,
});
