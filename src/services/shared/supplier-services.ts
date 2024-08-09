import type { AxiosResponse } from 'axios';
import { isAxiosError } from 'axios';

import { client } from '@/api';
import type {
  FirstConnectionRequest,
  SpecialityTypeResponse,
} from '@/api/auth';

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
