import type { AxiosError, AxiosResponse } from 'axios';

import { client } from '@/api';
import type { ResponseObject } from '@/api/profileSettings/type';
import { getToken } from '@/core/auth/utils';
import type {
  BasicInfoFormType,
  ResetPassFormProfileType,
} from '@/modules/profile/type';

function isAxiosError(error: unknown): error is AxiosError {
  return (error as AxiosError).isAxiosError !== undefined;
}

export const resetPasswordAsync = async (
  data: ResetPassFormProfileType
): Promise<AxiosResponse> => {
  try {
    const response = await client({
      url: '/api/users/archimatch-user/reset-password/',
      method: 'POST',
      data: data,
      headers: {
        'Content-Type': 'application/json',
      },
    });

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
};

export const getProfile = async (): Promise<ResponseObject> => {
  try {
    const token = getToken();
    const response = await client({
      url: '/api/users/archimatch-user/get-user-data',
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token?.access}`,
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      throw new Error(
        `API request failed with status ${error.response?.status}\nAPI request failed with message: ${error.message}`
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

export const updateClientProfileAsync = async (
  formData: BasicInfoFormType
): Promise<AxiosResponse> => {
  try {
    const token = getToken();
    const response = await client({
      url: '/api/users/archimatch-user/update-data/',
      method: 'PUT',
      data: formData,
      headers: {
        Authorization: `Bearer ${token?.access}`,
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      throw new Error(
        `API request failed with status ${error.response?.status}\nAPI request failed with message: ${error.message}`
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
