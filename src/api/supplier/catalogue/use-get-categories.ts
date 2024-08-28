import type { AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';

import type { SpecialityTypeResponse } from '@/api/auth';
import type { Variables } from '@/api/types';
import { getCollectionsCategories } from '@/services/shared/supplier-services';

export const useGetCollectionsCategoriesApi = createQuery<
  SpecialityTypeResponse[],
  Variables,
  AxiosError
>({
  queryKey: ['collectionCategories'],
  fetcher: getCollectionsCategories,
});
