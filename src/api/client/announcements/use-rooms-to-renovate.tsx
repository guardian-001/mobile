import type { AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';

import { getAnnouncementStep6 } from '@/services/shared/announcement-service';

import type { PropertyAndWorkTypeVariables, PropertyResponse } from './types';

const fetchAnnouncementStep6 = async ({
  propertyType,
  workType,
}: PropertyAndWorkTypeVariables): Promise<PropertyResponse> => {
  return getAnnouncementStep6(propertyType, workType);
};

export const useRoomsToRenovateApi = createQuery<
  PropertyResponse,
  PropertyAndWorkTypeVariables,
  AxiosError
>({
  queryKey: [
    'announcement-step6',
    (variables: PropertyAndWorkTypeVariables) => {
      variables.propertyType, variables.workType;
    },
  ],
  fetcher: fetchAnnouncementStep6,
});
