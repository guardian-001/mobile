import type { AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';

import { getAnnouncementStep9 } from '@/services/shared/announcement-service';

import type { ArchitecturalStyleResponse, VariablesStep9 } from './types';

const fetchAnnouncementStep9 = async ({
  propertyType,
}: VariablesStep9): Promise<ArchitecturalStyleResponse> => {
  return getAnnouncementStep9(propertyType);
};

export const usePreferredStyleApi = createQuery<
  ArchitecturalStyleResponse,
  VariablesStep9,
  AxiosError
>({
  queryKey: [
    'announcement-step5',
    (variables: VariablesStep9) => variables.propertyType,
  ],
  fetcher: fetchAnnouncementStep9,
});
