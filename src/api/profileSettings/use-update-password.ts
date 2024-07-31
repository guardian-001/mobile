import type { AxiosError, AxiosResponse } from 'axios';
import { createMutation } from 'react-query-kit';

import type { ResetPassFormProfileType } from '@/modules/profile/type';
import { resetPasswordAsync } from '@/services/shared/profile-settings-services';

export const useUpdatePasswordApi = createMutation<
  AxiosResponse,
  ResetPassFormProfileType,
  AxiosError
>({
  mutationKey: ['resetPassword'],
  mutationFn: resetPasswordAsync,
});
