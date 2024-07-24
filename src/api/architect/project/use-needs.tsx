import type { AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';

import { client } from '@/api/common';
import type { Need } from '@/types';

type Response = Need[];
type Variables = { id: number };

export const useNeedsApi = createQuery<Response, Variables, AxiosError>({
  queryKey: ['categories'],
  fetcher: ({ id }) => {
    // const [_key, { id }] = queryKey; // Destructure to get the id from queryKey
    return client
      .get(
        `/api/announcement/architect-speciality-needs?architect_speciality_id=${id}`
      )
      .then((response) => response.data);
  },
});
