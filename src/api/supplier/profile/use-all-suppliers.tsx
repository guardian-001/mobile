import type { AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';

import type { Variables } from '@/api/types';
import { getAllSuppliers } from '@/services/shared/supplier-services';

import type { SupplierProfileInfoListType } from './types';
type Response = SupplierProfileInfoListType;
export const useAllSuppliersApi = createQuery<Response, Variables, AxiosError>({
  queryKey: ['Allsuppliers'],
  fetcher: getAllSuppliers,
});
