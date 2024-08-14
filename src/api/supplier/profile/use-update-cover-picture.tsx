import type { AxiosError, AxiosResponse } from 'axios';
import { createMutation } from 'react-query-kit';

import { putUpdateCoverPicture } from '@/services/shared/supplier-services';

type Request = FormData;

export const useUpdateCoverPictureApi = createMutation<
  AxiosResponse,
  Request,
  AxiosError
>({
  mutationFn: putUpdateCoverPicture,
});
