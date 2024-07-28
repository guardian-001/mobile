import type { AxiosError, AxiosResponse } from 'axios';
import { createMutation } from 'react-query-kit';

import { client } from '@/api/common';

type Response = AxiosResponse;
type Variables = FormData;

export const useCreateProjectApi = createMutation<
  Response,
  Variables,
  AxiosError
>({
  mutationKey: ['createProject'],
  mutationFn: async (formData: FormData) => {
    try {
      const response = await client({
        url: 'api/architect-realization/create-realization/',
        method: 'POST',
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
});
