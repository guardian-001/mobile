import type { AxiosError, AxiosResponse } from 'axios';
import { createMutation } from 'react-query-kit';

import { updateSupplierVideoAsync } from '@/services/shared/supplier-services';
type Request = FormData;
export const useUpdateSupplierVideoApi = createMutation<
  AxiosResponse,
  Request,
  AxiosError
>({
  mutationKey: ['updateSupplierVideo'],
  mutationFn: updateSupplierVideoAsync,
});
