import type { AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';

import { getCategories } from '@/services/shared/project-realization-services';

import type { ResponseCategory, Variables } from './types';

export const useCategoriesApi = createQuery<
  ResponseCategory,
  Variables,
  AxiosError
>({
  queryKey: ['categories'],
  fetcher: getCategories,
});
