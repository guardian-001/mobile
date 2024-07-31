import { useRouter } from 'expo-router';

import { useSignupApi } from '@/api/auth';
import { useRouteName, useTimezone } from '@/core';
import { useFormStepper } from '@/shared';

import type { SignupFormDataType } from '../types';

export const useDemoConfirmation = () => {
  const { formData } = useFormStepper<SignupFormDataType>();
  const signup = useSignupApi();
  const router = useRouter();
  const space = useRouteName();
  const [timezone] = useTimezone();
  const handleConfirmationStep = () => {
    signup.mutate(formData, {
      onSuccess: () => {
        router.push(`/(${space})/(public)/login`);
      },
    });
  };
  return { formData, timezone, handleConfirmationStep };
};
