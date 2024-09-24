import type { AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';

import { getRealizationsByArchitect } from '@/services/shared/project-realization-services';

import type { ProjectItemList, ProjectRealizationsVariables } from './types';

const fetchRealizationsByArchitect = async ({
  architectId,
}: ProjectRealizationsVariables): Promise<ProjectItemList> => {
  return getRealizationsByArchitect(architectId);
};
export const useRealizationsByArchitectApi = createQuery<
  ProjectItemList,
  ProjectRealizationsVariables,
  AxiosError
>({
  queryKey: [
    'getRealizationsByArchitect',
    (variables: ProjectRealizationsVariables) => variables.architectId,
  ],
  fetcher: fetchRealizationsByArchitect,
});
