import type { AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';

import { client } from '@/api/common';
import type { Need } from '@/types';

type Response = Need[];
type Variables = void;

export const useNeedsApi = createQuery<Response, Variables, AxiosError>({
  queryKey: ['categories'],
  fetcher: () => {
    return client
      .get(`/api/architect-realization/needs/`)
      .then((response) => response.data);
  },
});
