import type { AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';

import { getAnnouncementStep4 } from '@/services/shared/announcement-service';

import type { Response, VariablesStep4 } from './types';

const fetchAnnouncementStep4 = async ({
  projectCategory,
}: VariablesStep4): Promise<Response> => {
  return getAnnouncementStep4(projectCategory);
};

export const usePropertyTypesApi = createQuery<
  Response,
  VariablesStep4,
  AxiosError
>({
  queryKey: [
    'announcement-step4',
    (variables: VariablesStep4) => variables.projectCategory,
  ],
  fetcher: fetchAnnouncementStep4,
});
