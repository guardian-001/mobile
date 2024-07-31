import type { AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';

import { getAnnouncementStep5 } from '@/services/shared/announcement-service';

import type { PropertyTypeVariables, ResponseWorkType } from './types';

const fetchAnnouncementStep5 = async ({
  propertyType,
}: PropertyTypeVariables): Promise<ResponseWorkType> => {
  return getAnnouncementStep5(propertyType);
};

export const useWorkTypeApi = createQuery<
  ResponseWorkType,
  PropertyTypeVariables,
  AxiosError
>({
  queryKey: [
    'announcement-step5',
    (variables: PropertyTypeVariables) => variables.propertyType,
  ],
  fetcher: fetchAnnouncementStep5,
});
