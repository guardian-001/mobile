import type { AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';

import { getAnnouncementStep7Cities as getAnnouncementCities } from '@/services/shared/announcement-service';
import type { TagType } from '@/types';

import type { Variables } from '../types';

export const useCitiesApi = createQuery<TagType[], Variables, AxiosError>({
  queryKey: ['getAnnouncementCities'],
  fetcher: getAnnouncementCities,
});
