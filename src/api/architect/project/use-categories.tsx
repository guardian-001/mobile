import type { AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';

import { client } from '@/api/common';

import type { Category } from './types';

type Response = Category[];
type Variables = void;
export const useCategoriesApi = createQuery<Response, Variables, AxiosError>({
  queryKey: ['categories'],
  fetcher: () => {
    return client
      .get(`/api/announcement/project-categories`)
      .then((response) => response.data);
  },
});
