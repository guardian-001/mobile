import type { AxiosError, AxiosResponse } from 'axios';
import { createMutation } from 'react-query-kit';

import { isUserFoundAsync } from '@/services/shared/user-found-services';
import type { EmailPhoneType } from '@/types';

export const useIsUserFound = createMutation<
  AxiosResponse,
  EmailPhoneType,
  AxiosError
>({
  mutationKey: ['isUserFound'],
  mutationFn: isUserFoundAsync,
});
