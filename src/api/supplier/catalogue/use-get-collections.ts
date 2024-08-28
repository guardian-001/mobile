import type { AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';

import type { Variables } from '@/api/types';
import type { Collection } from '@/modules/supplier/profile/type';
import { getCollections } from '@/services/shared/supplier-services';

export const useGetCollectionsApi = createQuery<
  Collection[],
  Variables,
  AxiosError
>({
  queryKey: ['collections'],
  fetcher: getCollections,
});
