import type { AxiosResponse } from 'axios';
import { isAxiosError } from 'axios';

import { client } from '@/api';
import type { SpecialityTypeResponse } from '@/api/auth';
import type { ProfileSocialLinksFormData } from '@/api/profileSettings/type';
import type { FirstConnectionRequest } from '@/api/supplier/createAccount/types';
import type { SupplierProfileInfoType } from '@/api/supplier/profile/types';
import type {
  BioFormType,
  CompanyInformationFormType,
} from '@/modules/supplier/profile/type';

export async function getSupplierProfile(): Promise<SupplierProfileInfoType> {
  const url = 'api/users/supplier/get-profile/';
  return client
    .get(url)
    .then((response) => response.data)
    .catch((error) => {
      if (isAxiosError(error)) {
        throw new Error(
          `API request failed with status ${error.response?.status}`
        );
      } else {
        throw new Error(
          `API request failed: ${
            error instanceof Error ? error.message : 'Unknown error'
          }`
        );
      }
    });
}

export async function getSpecialityTypes(): Promise<SpecialityTypeResponse[]> {
  const url = 'api/users/supplier/speciality-types/';
  return client
    .get(url)
    .then((response) => response.data)
    .catch((error) => {
      if (isAxiosError(error)) {
        throw new Error(
          `API request failed with status ${error.response?.status}`
        );
      } else {
        throw new Error(
          `API request failed: ${
            error instanceof Error ? error.message : 'Unknown error'
          }`
        );
      }
    });
}

export async function postFirstConnection(
  request: FirstConnectionRequest
): Promise<AxiosResponse> {
  const url = 'api/users/supplier/first-connection/';
  return client.post(url, request);
}

export async function putUpdateCoverPicture(
  request: FormData
): Promise<AxiosResponse> {
  const url = '/api/users/supplier/update-cover-image/';
  return client.put(url, request, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}

export async function putUpdateProfilePicture(
  request: FormData
): Promise<AxiosResponse> {
  console.log('hello request : ', request);

  const url = '/api/users/supplier/update-profile-image/';
  return client.put(url, request, {
    headers: {
      'Content-Type': 'image/png',
    },
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
export async function updateSocialLinkAsync(
  formData: ProfileSocialLinksFormData
): Promise<AxiosResponse> {
  const url = `api/users/supplier/update-links/`;
  return client.put(url, formData);
}
