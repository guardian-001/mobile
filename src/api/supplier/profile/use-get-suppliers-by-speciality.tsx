import type { AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';

import { getSuppliersBySpecialityType } from '@/services/shared/supplier-services';

import type {
  SupplierProfileInfoListType,
  SuppliersBySpecialityVariables,
} from './types';
type Response = SupplierProfileInfoListType;
type variables = SuppliersBySpecialityVariables;
const fetchSuppliersBySpecialityType = async ({
  specialityId,
}: variables): Promise<Response> => {
  return getSuppliersBySpecialityType(specialityId);
};
export const useSuppliersBySpecialityTypeApi = createQuery<
  Response,
  variables,
  AxiosError
>({
  queryKey: [
    'SuppliersBySpecialityType',
    (variables: variables) => variables.specialityId,
  ],
  fetcher: fetchSuppliersBySpecialityType,
});
