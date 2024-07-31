import type { AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';

import { getAnnouncementStep4 } from '@/services/shared/announcement-service';

import type { ProjectCategoryVariables, Response } from './types';

const fetchAnnouncementStep4 = async ({
  projectCategory,
}: ProjectCategoryVariables): Promise<Response> => {
  return getAnnouncementStep4(projectCategory);
};

export const usePropertyTypesApi = createQuery<
  Response,
  ProjectCategoryVariables,
  AxiosError
>({
  queryKey: [
    'announcement-step4',
    (variables: ProjectCategoryVariables) => variables.projectCategory,
  ],
  fetcher: fetchAnnouncementStep4,
});
