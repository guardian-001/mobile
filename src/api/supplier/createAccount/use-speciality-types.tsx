import type { AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';

import type { Variables } from '@/api/types';
import { getSpecialityTypes } from '@/services/shared/supplier-services';

import type { SpecialityTypeResponse } from './types';

export const useSpecialityTypesApi = createQuery<
  SpecialityTypeResponse[],
  Variables,
  AxiosError
>({
  queryKey: ['specialtyTypes'],
  fetcher: getSpecialityTypes,
});
