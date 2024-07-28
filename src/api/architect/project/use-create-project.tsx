import type { AxiosError, AxiosResponse } from 'axios';
import { createMutation } from 'react-query-kit';

import { createProject } from '@/services/shared/project-realization-services';

import type { VariablesCreateProject } from './types';

export const useCreateProjectApi = createMutation<
  AxiosResponse,
  VariablesCreateProject,
  AxiosError
>({
  mutationKey: ['createProject'],
  mutationFn: createProject,
});
