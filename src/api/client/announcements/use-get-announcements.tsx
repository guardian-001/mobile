import type { AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';

import { getAnnouncements } from '@/services/shared/announcement-service';

import type { ProjectList, Variables } from './types';

export const useGetAnnouncementsApi = createQuery<
  ProjectList,
  Variables,
  AxiosError
>({
  queryKey: ['getAnnouncements'],
  fetcher: getAnnouncements,
});
