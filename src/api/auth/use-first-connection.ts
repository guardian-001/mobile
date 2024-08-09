import type { AxiosError, AxiosResponse } from 'axios';
import { createMutation } from 'react-query-kit';

import { postFirstConnection } from '@/services/shared/supplier-services';

import type { FirstConnectionRequest } from './types';

type Request = FirstConnectionRequest;

export const useFirstConnectionApi = createMutation<
  AxiosResponse,
  Request,
  AxiosError
>({
  mutationFn: postFirstConnection,
});
