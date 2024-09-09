import type { AxiosResponse } from 'axios';
import { isAxiosError } from 'axios';

import { client } from '@/api';
import type { ArchitectProfileInfoType } from '@/api/architect/profile/types';
import type { Review, ReviewRequest } from '@/types/architect';

export async function getArchitectProfile(): Promise<ArchitectProfileInfoType> {
  const url = 'api/users/architect/get-profile/';
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
  const url = 'api/users/architect/update-profile-image/';
  return client.put(url, request, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}

export async function updateArchitectAboutAsync(
  formData: FormData
): Promise<AxiosResponse> {
  const url = `api/users/architect/update-about/`;
  return client.put(url, formData);
}

export async function updateArchitectNeedsAsync(data: {
  needs: string[];
}): Promise<AxiosResponse> {
  const url = `api/users/architect/update-needs/`;
  return client.put(url, data);
}

export async function getArchitectProfileClientReviews(): Promise<Review[]> {
  const url = 'api/moderation/client-review/architect-reviews';
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

export async function reportAsync(data: ReviewRequest): Promise<AxiosResponse> {
  const url = `api/moderation/review-report/create/`;
  return client.post(url, data);
}

export async function getArchitectProfileById(
  id: number
): Promise<ArchitectProfileInfoType> {
  const url = `api/users/architect/details/${id}`;
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
