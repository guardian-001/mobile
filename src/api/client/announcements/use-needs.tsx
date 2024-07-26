import type { AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';

import { getAnnouncementStep2 } from '@/services/shared/announcement-service';

import type { Response, VariablesStep2 } from './types';

const fetchAnnouncementStep2 = async ({
  architectSpeciality,
}: VariablesStep2): Promise<Response> => {
  return getAnnouncementStep2(architectSpeciality);
};

export const useNeedsApi = createQuery<Response, VariablesStep2, AxiosError>({
  queryKey: [
    'announcement-step2',
    (variables: VariablesStep2) => variables.architectSpeciality,
  ],
  fetcher: fetchAnnouncementStep2,
});
