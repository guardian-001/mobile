import type { AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';

import type { Variables } from '@/api/types';
import { getArchitectProfile } from '@/services/shared/architect-services';

import type { ArchitectProfileInfoType } from './types';
type Response = ArchitectProfileInfoType;
export const useArchitectProfileApi = createQuery<
  Response,
  Variables,
  AxiosError
>({
  queryKey: ['architectProfile'],
  fetcher: getArchitectProfile,
});
