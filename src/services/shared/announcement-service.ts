import type { AxiosError } from 'axios';

import { client } from '@/api';
import type { resultType } from '@/api/client';

function isAxiosError(error: unknown): error is AxiosError {
  return (error as AxiosError).isAxiosError !== undefined;
}

export async function getAnnouncementStep1(): Promise<resultType[]> {
  const url = `/api/announcement/architect-specialities`;
  return client
    .get(url)
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
export async function getAnnouncementStep2(id: number): Promise<resultType[]> {
  const url = `api/announcement/architect-speciality-needs?architect_speciality_id=${id}`;
  return client
    .get(url)
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
export async function getAnnouncementStep3(): Promise<resultType[]> {
  const url = `/api/announcement/project-categories`;
  return client
    .get(url)
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
