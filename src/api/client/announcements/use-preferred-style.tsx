import type { AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';

import { getAnnouncementStep9 } from '@/services/shared/announcement-service';

import type {
  ArchitecturalStyleResponse,
  PropertyTypeVariables,
} from './types';

const fetchAnnouncementStep9 = async ({
  propertyType,
}: PropertyTypeVariables): Promise<ArchitecturalStyleResponse> => {
  return getAnnouncementStep9(propertyType);
};

export const usePreferredStyleApi = createQuery<
  ArchitecturalStyleResponse,
  PropertyTypeVariables,
  AxiosError
>({
  queryKey: [
    'announcement-step9',
    (variables: PropertyTypeVariables) => variables.propertyType,
  ],
  fetcher: fetchAnnouncementStep9,
});
