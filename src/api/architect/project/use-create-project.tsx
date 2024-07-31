import type { AxiosError, AxiosResponse } from 'axios';
import { createMutation } from 'react-query-kit';

import { useCreateProject } from '@/services/shared/project-realization-services';

import type { VariablesCreateProject } from './types';

export const useCreateProjectApi = createMutation<
  AxiosResponse,
  VariablesCreateProject,
  AxiosError
>({
  mutationKey: ['createProject'],
  mutationFn: useCreateProject,
  onSuccess: (data) => {
    return data;
  },
  onError: (error) => {
    return error;
  },
});
