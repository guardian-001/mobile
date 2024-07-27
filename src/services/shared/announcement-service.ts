import type { AxiosError } from 'axios';

import { client } from '@/api';
import type {
  PropertyResponse,
  Response,
  ResponseWorkType,
} from '@/api/client/announcements/types';
import type { TagType } from '@/types';

function isAxiosError(error: unknown): error is AxiosError {
  return (error as AxiosError).isAxiosError !== undefined;
}

export async function getAnnouncementStep1(): Promise<Response> {
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
export async function getAnnouncementStep2(id: number): Promise<Response> {
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
export async function getAnnouncementStep3(): Promise<Response> {
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
export async function getAnnouncementStep4(id: number): Promise<Response> {
  const url = `api/announcement/property-types?project_category_id=${id}`;
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
export async function getAnnouncementStep5(
  id: number
): Promise<ResponseWorkType> {
  const url = `api/announcement/work-types?property_type_id=${id}`;
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
export async function getAnnouncementStep6(
  propertyId: number,
  workId: number
): Promise<PropertyResponse> {
  const url = `api/announcement/renovation-pieces?property_type_id=${propertyId}&work_type_id=${workId}`;
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
export async function getAnnouncementStep7Cities(): Promise<TagType[]> {
  const url = `/api/announcement/cities`;
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
export async function getAnnouncementStep7TerrainSurfaces(): Promise<
  TagType[]
> {
  const url = `/api/announcement/terrain-surfaces`;
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
export async function getAnnouncementStep7WorkSurfaces(): Promise<TagType[]> {
  const url = `/api/announcement/work-surfaces`;
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
