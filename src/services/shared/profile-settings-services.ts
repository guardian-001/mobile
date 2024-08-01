import type { AxiosResponse } from 'axios';

import { client } from '@/api';
import type { ResponseObject } from '@/api/profileSettings/type';
import type {
  BasicInfoFormType,
  ResetPassFormProfileType,
} from '@/modules/profile/type';
import { showErrorMessage, showSuccesMessage } from '@/shared/components';

export const resetPasswordAsync = async (
  data: ResetPassFormProfileType
): Promise<AxiosResponse> => {
  return client
    .post('/api/users/archimatch-user/reset-password/', data)
    .then((response) => {
      showSuccesMessage(response.data.message);
      return response.data;
    })
    .catch((error) => {
      showErrorMessage(error.response.data.errors[0].detail);
      throw error.response?.data || error.message;
    });
};
export async function getProfile(): Promise<ResponseObject> {
  const url = `/api/users/archimatch-user/get-user-data`;
  return client
    .get(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      showErrorMessage(error.response.data.errors[0].detail);
      throw error.response?.data || error.message;
    });
}
export async function updateClientProfileAsync(
  formData: BasicInfoFormType
): Promise<AxiosResponse> {
  const url = `/api/users/archimatch-user/update-data/`;

  return client
    .put(url, formData)
    .then((response) => {
      showSuccesMessage(response.data.message);
      return response.data;
    })
    .catch((error) => {
      showErrorMessage(error.response.data.errors[0].detail);
      throw error.response?.data || error.message;
    });
}
