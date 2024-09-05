import type { AxiosError, AxiosResponse } from 'axios';
import { createMutation } from 'react-query-kit';

import { updateArchitectBioAsync } from '@/services/shared/architect-services';

export const useUpdateArchitectBioApi = createMutation<
  AxiosResponse,
  FormData,
  AxiosError
>({
  mutationKey: ['updateArchitectBio'],
  mutationFn: updateArchitectBioAsync,
});
