import type { AxiosError, AxiosResponse } from 'axios';
import { createMutation } from 'react-query-kit';

import { createCollection } from '@/services/shared/supplier-services';

import type { createCollectionRequestData } from '../profile/types';

export const useCreateCollectionApi = createMutation<
  AxiosResponse,
  createCollectionRequestData,
  AxiosError
>({
  mutationFn: createCollection,
});
