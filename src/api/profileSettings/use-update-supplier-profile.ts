import type { AxiosError, AxiosResponse } from 'axios';
import { createMutation } from 'react-query-kit';

import type { CompanyInformationFormType } from '@/modules/supplier/profile/type';
import { updateSupplierProfileAsync } from '@/services/shared/profile-settings-services';

export const useUpdateSupplierProfileApi = createMutation<
  AxiosResponse,
  CompanyInformationFormType,
  AxiosError
>({
  mutationKey: ['updateSupplierProfile'],
  mutationFn: updateSupplierProfileAsync,
});
