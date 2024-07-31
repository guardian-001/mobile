import type { AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';

import { getAnnouncementStep6 } from '@/services/shared/announcement-service';

import type { PropertyResponse, VariablesStep6 } from './types';

const fetchAnnouncementStep6 = async ({
  propertyType,
  workType,
}: VariablesStep6): Promise<PropertyResponse> => {
  return getAnnouncementStep6(propertyType, workType);
};

export const useRoomsToRenovateApi = createQuery<
  PropertyResponse,
  VariablesStep6,
  AxiosError
>({
  queryKey: [
    'announcement-step6',
    (variables: VariablesStep6) => {
      variables.propertyType, variables.workType;
    },
  ],
  fetcher: fetchAnnouncementStep6,
});
