import type { AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';

import { getAnnouncementStep3 } from '@/services/shared/announcement-service';

import type { Response, Variables } from './types';

export const useCategoriesApi = createQuery<Response, Variables, AxiosError>({
  queryKey: ['categories'],
  fetcher: getAnnouncementStep3,
});
