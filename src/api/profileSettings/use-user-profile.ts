import type { AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';

import { getProfile } from '@/services/shared/profile-settings-services';

import type { Variables } from '../client/announcements/types';
import type { ResponseObject } from './type';

export const useUserProfileApi = createQuery<
  ResponseObject,
  Variables,
  AxiosError
>({
  queryKey: ['getProfile'],
  fetcher: getProfile,
});
