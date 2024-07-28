import type { AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';

import { getAnnouncementStep5 } from '@/services/shared/announcement-service';

import type { ResponseWorkType, VariablesStep5 } from './types';

const fetchAnnouncementStep5 = async ({
  propertyType,
}: VariablesStep5): Promise<ResponseWorkType> => {
  return getAnnouncementStep5(propertyType);
};

export const useWorkTypeApi = createQuery<
  ResponseWorkType,
  VariablesStep5,
  AxiosError
>({
  queryKey: [
    'announcement-step5',
    (variables: VariablesStep5) => variables.propertyType,
  ],
  fetcher: fetchAnnouncementStep5,
});
