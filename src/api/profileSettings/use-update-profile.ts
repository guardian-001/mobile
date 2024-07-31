import type { AxiosError, AxiosResponse } from 'axios';
import { createMutation } from 'react-query-kit';

import type { BasicInfoFormType } from '@/modules/profile/type';
import { updateClientProfileAsync } from '@/services/shared/profile-settings-services';

export const useUpdateProfileApi = createMutation<
  AxiosResponse,
  BasicInfoFormType,
  AxiosError
>({
  mutationKey: ['updateClientProfile'],
  mutationFn: updateClientProfileAsync,
});
