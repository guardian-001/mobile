import type { AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';

import { getAnnouncementStep2 } from '@/services/shared/announcement-service';

import type { Response } from './types';

type Variables = { architectSpeciality: number };

const fetchAnnouncementStep2 = async ({
  architectSpeciality,
}: Variables): Promise<Response> => {
  return getAnnouncementStep2(architectSpeciality);
};

export const useNeedsApi = createQuery<Response, Variables, AxiosError>({
  queryKey: [
    'announcement-step2',
    (variables: Variables) => variables.architectSpeciality,
  ],
  fetcher: fetchAnnouncementStep2,
});
