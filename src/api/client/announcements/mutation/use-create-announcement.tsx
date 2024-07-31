import type { AxiosError, AxiosResponse } from 'axios';
import { createMutation } from 'react-query-kit';

import { createAnnouncementAsync } from '@/services/shared/announcement-service';
import type { AnnouncementType } from '@/types/announcement';

export const useCreateAnnouncementApi = createMutation<
  AxiosResponse,
  AnnouncementType,
  AxiosError
>({
  mutationKey: ['CreateAnnouncement'],
  mutationFn: createAnnouncementAsync,
});
