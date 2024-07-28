import type { AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';

import { getAnnouncementStep10 } from '@/services/shared/announcement-service';

import type { ProjectExtensionsResponse, VariablesStep10 } from './types';

const fetchAnnouncementStep10 = async ({
  propertyType,
  workType,
}: VariablesStep10): Promise<ProjectExtensionsResponse> => {
  return getAnnouncementStep10(propertyType, workType);
};

export const useAdditionalInfoApi = createQuery<
  ProjectExtensionsResponse,
  VariablesStep10,
  AxiosError
>({
  queryKey: [
    'announcement-step10',
    (variables: VariablesStep10) => {
      variables.propertyType, variables.workType;
    },
  ],
  fetcher: fetchAnnouncementStep10,
});
