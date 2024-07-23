import type { AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';

import { client } from '@/api/common';
import { getToken } from '@/core/auth/utils';

import type { Style } from './types';

type Response = Style[];
type Variables = void;
export const useStylesApi = createQuery<Response, Variables, AxiosError>({
  queryKey: ['styles'],
  fetcher: async () => {
    const token = getToken();
    if (!token) {
      throw new Error('User is not authenticated');
    }

    try {
      const response = await client.get(`/api/users/architectural-styles`, {
        headers: {
          Authorization: `Bearer ${token.access}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
});
