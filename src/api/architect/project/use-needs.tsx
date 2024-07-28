import type { AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';

import { getNeeds } from '@/services/shared/project-realization-services';

import type { ResponseNeeds, Variables } from './types';

export const useNeedsApi = createQuery<ResponseNeeds, Variables, AxiosError>({
  queryKey: ['needs'],
  fetcher: getNeeds,
});
