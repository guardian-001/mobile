import type { AxiosError } from 'axios';

import { client } from '@/api';
import type { resultType } from '@/api/client';
import { showError } from '@/shared/components';

function isAxiosError(error: unknown): error is AxiosError {
  return (error as AxiosError).isAxiosError !== undefined;
}

export async function getAnnouncementStep1(): Promise<resultType[]> {
  try {
    const url = `/api/announcement/architect-specialities`;
    const response = await client.get(url);
    return response.data;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      showError(error);
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

export async function getAnnouncementStep3(): Promise<resultType[]> {
  try {
    const url = `/api/announcement/project-categories`;
    const response = await client.get(url);
    return response.data;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      showError(error);
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
