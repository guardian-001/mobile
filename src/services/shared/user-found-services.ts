import type { AxiosResponse } from 'axios';

import { client } from '@/api';
import { showErrorMessage } from '@/shared/components';
import type { EmailPhoneType } from '@/types';

export const isUserFoundAsync = async (
  emailPhoneData: EmailPhoneType
): Promise<AxiosResponse> => {
  return client
    .post('/api/users/archimatch-user/verify-credentials/', emailPhoneData)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      showErrorMessage(error.response.data.errors[0].detail);
      throw error.response?.data || error.message;
    });
};
