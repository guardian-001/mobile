import type { AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';

import { getRealizationById } from '@/services/shared/project-realization-services';

import type { ProjectItem, ProjectRealizationVariable } from './types';

const fetchRealizationById = async ({
  projectId,
}: ProjectRealizationVariable): Promise<ProjectItem> => {
  return getRealizationById(projectId);
};
export const useRealizationByIdApi = createQuery<
  ProjectItem,
  ProjectRealizationVariable,
  AxiosError
>({
  queryKey: [
    'getRealizationById',
    (variables: ProjectRealizationVariable) => variables.projectId,
  ],
  fetcher: fetchRealizationById,
});
