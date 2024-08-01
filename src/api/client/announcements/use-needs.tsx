import type { AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';

import { getAnnouncementStep2 } from '@/services/shared/announcement-service';

import type { ArchitectSpecialityVariables, Response } from './types';

const fetchAnnouncementStep2 = async ({
  architectSpeciality,
}: ArchitectSpecialityVariables): Promise<Response> => {
  return getAnnouncementStep2(architectSpeciality);
};

export const useNeedsApi = createQuery<
  Response,
  ArchitectSpecialityVariables,
  AxiosError
>({
  queryKey: [
    'announcement-step2',
    (variables: ArchitectSpecialityVariables) => variables.architectSpeciality,
  ],
  fetcher: fetchAnnouncementStep2,
});
