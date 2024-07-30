import type { AxiosError, AxiosResponse } from 'axios';

import { client } from '@/api';
import type { EmailPhoneType } from '@/types';

function isAxiosError(error: unknown): error is AxiosError {
  return (error as AxiosError).isAxiosError !== undefined;
}

export const isUserFoundAsync = async (
  emailPhoneData: EmailPhoneType
): Promise<AxiosResponse> => {
  try {
    const response = await client({
      url: '/api/users/archimatch-user/verify-credentials/',
      method: 'POST',
      data: emailPhoneData,
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
