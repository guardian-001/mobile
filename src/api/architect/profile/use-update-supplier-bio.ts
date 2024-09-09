import type { AxiosError, AxiosResponse } from 'axios';
import { createMutation } from 'react-query-kit';

import { updateArchitectAboutAsync } from '@/services/shared/architect-services';

export const useUpdateArchitectAboutApi = createMutation<
  AxiosResponse,
  FormData,
  AxiosError
>({
  mutationKey: ['updateArchitectBio'],
  mutationFn: updateArchitectAboutAsync,
});
