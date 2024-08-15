import type { AxiosError, AxiosResponse } from 'axios';
import { createMutation } from 'react-query-kit';

import { putUpdateProfilePicture } from '@/services/shared/supplier-services';

type Request = FormData;

export const useUpdateProfilePictureApi = createMutation<
  AxiosResponse,
  Request,
  AxiosError
>({
  mutationFn: putUpdateProfilePicture,
  onSuccess(data) {
    //, variables, context
    console.log('success');
    console.log('data : ', data);
  },
  onError(error) {
    //, variables, context
    console.log('error: ', error);
  },
});
