import type { AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';

import { getAllPropertyTypes } from '@/services/shared/announcement-service';

import type { Response, Variables } from './types';

export const useAllPropertyTypesApi = createQuery<
  Response,
  Variables,
  AxiosError
>({
  queryKey: ['AllPropertyTypes'],
  fetcher: getAllPropertyTypes,
});
