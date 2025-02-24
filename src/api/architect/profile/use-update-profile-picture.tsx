import type { AxiosError, AxiosResponse } from 'axios';
import { createMutation } from 'react-query-kit';

import { putUpdateProfilePicture } from '@/services/shared/architect-services';

type Request = FormData;

export const useUpdateProfilePictureApi = createMutation<
  AxiosResponse,
  Request,
  AxiosError
>({
  mutationFn: putUpdateProfilePicture,
});
