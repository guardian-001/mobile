import type { AxiosError, AxiosResponse } from 'axios';
import { createMutation } from 'react-query-kit';

import { deleteProductAsync } from '@/services/shared/supplier-services';

export const useDeleteProductApi = createMutation<
  AxiosResponse,
  string,
  AxiosError
>({
  mutationFn: deleteProductAsync,
});
