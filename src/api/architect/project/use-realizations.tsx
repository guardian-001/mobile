import type { AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';

import { getRealizations } from '@/services/shared/project-realization-services';

import type { ProjectItemList, RealizationsVariables } from './types';

const fetchRealizations = async ({
  categories,
  properties,
}: RealizationsVariables): Promise<ProjectItemList> => {
  return getRealizations(categories, properties);
};
export const useRealizationsApi = createQuery<
  ProjectItemList,
  RealizationsVariables,
  AxiosError
>({
  queryKey: [
    'getRealizations',
    (variables: RealizationsVariables) => {
      variables.categories, variables.properties;
    },
  ],
  fetcher: fetchRealizations,
});
