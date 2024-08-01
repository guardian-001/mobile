import type { AxiosResponse } from 'axios';

import { client } from '@/api';
import type { EmailPhoneType } from '@/types';

export const isUserFoundAsync = async (
  emailPhoneData: EmailPhoneType
): Promise<AxiosResponse> => {
  return client.post(
    '/api/users/archimatch-user/verify-credentials/',
    emailPhoneData
  );
};
