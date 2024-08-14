import type { AxiosError, AxiosResponse } from 'axios';
import { createMutation } from 'react-query-kit';

import type { ProfileSocialLinksFormData } from '@/api/profileSettings/type';
import { updateSocialLinkAsync } from '@/services/shared/supplier-services';

export const useUpdateSocialLinkApi = createMutation<
  AxiosResponse,
  ProfileSocialLinksFormData,
  AxiosError
>({
  mutationKey: ['updateSocialLinkSupplier'],
  mutationFn: updateSocialLinkAsync,
});
