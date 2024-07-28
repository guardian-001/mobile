import { type AxiosResponse, isAxiosError } from 'axios';

import { client } from '@/api';
import type {
  ResponseCategory,
  ResponseNeeds,
  ResponseStyle,
} from '@/api/architect/project';

export async function getStyles(): Promise<ResponseStyle> {
  try {
    const response = await client.get(`/api/users/architectural-styles`);
    return response.data;
  } catch (error: unknown) {
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
  }
}
export async function getNeeds(): Promise<ResponseNeeds> {
  return client
    .get(`/api/architect-realization/needs/`)
    .then((response) => response.data)
    .catch((error: unknown) => {
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

export async function getCategories(): Promise<ResponseCategory> {
  return client
    .get(`/api/announcement/project-categories`)
    .then((response) => response.data)
    .catch((error: unknown) => {
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

export async function createProject(
  formData: FormData
): Promise<AxiosResponse> {
  try {
    const response = await client({
      url: 'api/architect-realization/create-realization/',
      method: 'POST',
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      console.log('errrrrr: ', error.message);
      throw new Error(
        `API request failed with status ${error.status}\n API request failed with message ${error.message}`
      );
    } else {
      throw new Error(
        `API request failed: ${
          error instanceof Error ? error.message : 'Unknown error'
        }`
      );
    }
  }
}
