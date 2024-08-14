import type { AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';

import type { Variables } from '@/api/types';
import { getSupplierProfile } from '@/services/shared/supplier-services';

import type { SupplierProfileInfoType } from './types';
type Response = SupplierProfileInfoType;
export const useSupplierProfileApi = createQuery<
  Response,
  Variables,
  AxiosError
>({
  queryKey: ['supplierProfile'],
  fetcher: getSupplierProfile,
});
