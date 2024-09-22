import type { AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';

import type { Collection } from '@/modules/supplier/profile/type';
import { getCollectionById } from '@/services/shared/supplier-services';

export const useGetCollectionByIdApi = createQuery<
  Collection,
  string,
  AxiosError
>({
  queryKey: ['collectionById'],
  fetcher: getCollectionById,
});
