import { useSignupApi } from '@/api/auth';
import { useTimezone } from '@/core';
import { useFormStepper } from '@/shared';

import type { SignupFormDataType } from '../types';

export const useDemoConfirmation = () => {
  const { formData } = useFormStepper<SignupFormDataType>();
  const signup = useSignupApi();

  const [timezone] = useTimezone();
  const handleConfirmationStep = () => {
    signup.mutate(formData);
  };
  return { formData, timezone, handleConfirmationStep };
};
