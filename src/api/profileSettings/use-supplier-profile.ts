import type { AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';

import { getProfileSupplier } from '@/services/shared/profile-settings-services';

import type { Variables } from '../client/announcements/types';
import type { SupplierUser } from './type';

export const useSupplierProfileApi = createQuery<
  SupplierUser,
  Variables,
  AxiosError
>({
  queryKey: ['getProfileSupplier'],
  fetcher: getProfileSupplier,
});
