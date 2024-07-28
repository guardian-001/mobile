import { useRouter } from 'expo-router';

import { useSignupApi } from '@/api/auth';
import { useTimezone } from '@/core';
import { useFormStepper } from '@/shared';

import type { SignupFormDataType } from '../types';

export const useDemoConfirmation = () => {
  const { formData } = useFormStepper<SignupFormDataType>();
  const signup = useSignupApi();
  const router = useRouter();
  const [timezone] = useTimezone();
  const handleConfirmationStep = () => {
    signup.mutate(formData, {
      onSuccess: () => {
        router.push('(architect)/(public)/login');
      },
      onError: () => {},
    });
  };
  return { formData, timezone, handleConfirmationStep };
};
