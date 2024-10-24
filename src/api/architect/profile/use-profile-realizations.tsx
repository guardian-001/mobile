import type { AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';

import type { Variables } from '@/api/types';
import type { ProjectRealizationType } from '@/modules/architect/realization/shared/types';
import { getArchitectProfileRealizations } from '@/services/shared/architect-services';
import type { PaginationResult } from '@/types';

type Response = PaginationResult<ProjectRealizationType>;
export const useArchitectProfileRealizationsApi = createQuery<
  Response,
  Variables,
  AxiosError
>({
  queryKey: ['architectProfileRealizations'],
  fetcher: getArchitectProfileRealizations,
});
