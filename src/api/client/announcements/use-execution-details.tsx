import type { AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';

import { getAnnouncementStep8 } from '@/services/shared/announcement-service';
import type { TagType } from '@/types';

import type { Variables } from './types';

export const useExecutionDetailsApi = createQuery<
  TagType[],
  Variables,
  AxiosError
>({
  queryKey: ['announcement-step8'],
  fetcher: getAnnouncementStep8,
});
