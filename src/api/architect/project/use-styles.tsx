// api/styles.ts
import type { AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';

import { client } from '@/api/common';
import type { Style } from '@/types';

type Response = Style[];
type Variables = void;

export const useStylesApi = createQuery<Response, Variables, AxiosError>({
  queryKey: ['styles'],
  fetcher: async () => {
    try {
      const response = await client.get(`/api/users/architectural-styles`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
});
