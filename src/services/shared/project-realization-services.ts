import { type AxiosResponse, isAxiosError } from 'axios';

import { client } from '@/api';
import type {
  ResponseCategory,
  ResponseNeeds,
  ResponseStyle,
} from '@/api/architect/project';
import type { ProjectRealizationType } from '@/modules/architect/realization/shared/types';

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

export async function useCreateProject(
  formData: ProjectRealizationType
): Promise<AxiosResponse> {
  try {
    const url = 'api/architect-realization/create-realization/';
    const response = await client.post(url, formData);

    return response.data;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
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

export const useCreateProjectImages = ({
  imgs,
  id,
}: {
  imgs: FormData;
  id: string;
}) => {
  try {
    const url = `api/architect-realization/update-realization-images/${id}/`;
    const response = client({
      url: url,
      method: 'PUT',
      data: { imgs, id },
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
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
};
