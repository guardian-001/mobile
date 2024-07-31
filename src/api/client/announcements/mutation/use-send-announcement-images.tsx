import type { AxiosError, AxiosResponse } from 'axios';
import { createMutation } from 'react-query-kit';

import { sendAnnouncementImagesDataAsync } from '@/services/shared/announcement-service';

import type { VariablesImagesMutation } from '../types';

export const useSendAnnouncementImagesApi = createMutation<
  AxiosResponse,
  VariablesImagesMutation,
  AxiosError
>({
  mutationKey: ['SendAnnouncementImages'],
  mutationFn: async ({ imgs, id }: VariablesImagesMutation) =>
    sendAnnouncementImagesDataAsync(imgs, id),
});
