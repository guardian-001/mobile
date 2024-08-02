import { useRouter } from 'expo-router';
import { useState } from 'react';

import { useSignupApi } from '@/api/auth';
import { useRouteName, useTimezone } from '@/core';
import { useFormStepper } from '@/shared';

import type { SignupFormDataType } from '../types';

export const useDemoConfirmation = () => {
  const { formData } = useFormStepper<SignupFormDataType>();
  const [errors, setErrors] = useState<string>('');
  const signup = useSignupApi();
  const router = useRouter();
  const space = useRouteName();
  const [timezone] = useTimezone();
  const handleConfirmationStep = () => {
    signup.mutate(formData, {
      onSuccess: () => {
        router.push(`/(${space})/(public)/login`);
      },
      onError: (error) => {
        setErrors(error.message);
        console.error('Signup request error:', error);
      },
    });
  };
  return { formData, timezone, errors, handleConfirmationStep };
};
