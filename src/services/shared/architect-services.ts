import type { AxiosResponse } from 'axios';
import { isAxiosError } from 'axios';

import { client } from '@/api';
import type { ArchitectProfileInfoType } from '@/api/architect/profile/types';

export async function getArchitectProfile(): Promise<ArchitectProfileInfoType> {
  const url = '/api/users/architect/get-profile/';
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
export async function putUpdateProfilePicture(
  request: FormData
): Promise<AxiosResponse> {
  const url = '/api/users/architect/update-profile-image/';
  return client.put(url, request, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}

export async function updateArchitectBioAsync(
  formData: FormData
): Promise<AxiosResponse> {
  const url = `api/users/architect/update-about/`;
  return client.put(url, formData);
}
