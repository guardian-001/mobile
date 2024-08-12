import type { AxiosResponse } from 'axios';

import { client } from '@/api';
import type { ResponseObject, SupplierUser } from '@/api/profileSettings/type';
import type {
  BasicInfoFormType,
  ResetPassFormProfileType,
} from '@/modules/profile/type';
import type {
  BioFormType,
  CompanyInformationFormType,
} from '@/modules/supplier/profile/type';
import { showErrorMessage } from '@/shared/components';

export const resetPasswordAsync = async (
  data: ResetPassFormProfileType
): Promise<AxiosResponse> => {
  return client.post('/api/users/archimatch-user/reset-password/', data);
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
  return client.put(url, formData);
}

export async function getProfileSupplier(): Promise<SupplierUser> {
  const url = `/api/users/supplier/get-profile/`;
  return client
    .get(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error.response?.data || error.message;
    });
}

export async function updateSupplierProfileAsync(
  formData: CompanyInformationFormType
): Promise<AxiosResponse> {
  const url = `api/users/supplier/update-profile/`;
  return client.put(url, formData);
}

export async function updateSupplierBioAsync(
  formData: BioFormType
): Promise<AxiosResponse> {
  const url = `/api/users/supplier/update-bio/`;
  return client.put(url, formData);
}
