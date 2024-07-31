import type { AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';

import { getAnnouncementStep10 } from '@/services/shared/announcement-service';

import type {
  ProjectExtensionsResponse,
  PropertyAndWorkTypeVariables,
} from './types';

const fetchAnnouncementStep10 = async ({
  propertyType,
  workType,
}: PropertyAndWorkTypeVariables): Promise<ProjectExtensionsResponse> => {
  return getAnnouncementStep10(propertyType, workType);
};

export const useAdditionalInfoApi = createQuery<
  ProjectExtensionsResponse,
  PropertyAndWorkTypeVariables,
  AxiosError
>({
  queryKey: [
    'announcement-step10',
    (variables: PropertyAndWorkTypeVariables) => {
      variables.propertyType, variables.workType;
    },
  ],
  fetcher: fetchAnnouncementStep10,
});
