import type { AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';

import { getAnnouncementStep1 } from '@/services/shared/announcement-service';

import type { Response, Variables } from './types';

export const useStylesApi = createQuery<Response, Variables, AxiosError>({
  queryKey: ['styles'],
  fetcher: getAnnouncementStep1,
});
