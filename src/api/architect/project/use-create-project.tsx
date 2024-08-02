import type { AxiosError, AxiosResponse } from 'axios';
import { createMutation } from 'react-query-kit';

import {
  useCreateProject,
  useCreateProjectImages,
} from '@/services/shared/project-realization-services';

import type {
  VariablesCreateProject,
  VariablesCreateProjectImages,
} from './types';

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

export const useCreateProjectImagesApi = createMutation<
  AxiosResponse,
  VariablesCreateProjectImages,
  AxiosError
>({
  mutationKey: ['createProjectImages'],
  mutationFn: useCreateProjectImages,
  onSuccess: (data) => {
    return data;
  },
  onError: (error) => {
    return error;
  },
});
