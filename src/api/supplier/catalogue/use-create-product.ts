import type { AxiosError, AxiosResponse } from 'axios';
import { createMutation } from 'react-query-kit';

import { createProduct } from '@/services/shared/supplier-services';

import type { createProductRequestData } from './types';

export const useCreateProductApi = createMutation<
  AxiosResponse,
  createProductRequestData,
  AxiosError
>({
  mutationFn: createProduct,
});
