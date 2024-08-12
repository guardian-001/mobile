import type { AxiosError, AxiosResponse } from 'axios';
import { createMutation } from 'react-query-kit';

import type { BioFormType } from '@/modules/supplier/profile/type';
import { updateSupplierBioAsync } from '@/services/shared/profile-settings-services';

export const useUpdateSupplierBioApi = createMutation<
  AxiosResponse,
  BioFormType,
  AxiosError
>({
  mutationKey: ['updateSupplierBio'],
  mutationFn: updateSupplierBioAsync,
});
