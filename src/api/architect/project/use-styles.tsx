import type { AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';

import { getStyles } from '@/services/shared/project-realization-services';

import type { ResponseStyle, Variables } from './types';

export const useStylesApi = createQuery<ResponseStyle, Variables, AxiosError>({
  queryKey: ['styles'],
  fetcher: getStyles,
});
