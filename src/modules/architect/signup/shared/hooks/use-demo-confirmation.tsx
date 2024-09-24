import { useRouter } from 'expo-router';
import { useState } from 'react';

import { useSignupApi } from '@/api/auth';
import { translate, useRouteName, useTimezone } from '@/core';
import { useFormStepper } from '@/shared';
import { showError, showSuccesMessage } from '@/shared/components';

import type { SignupFormDataType } from '../types';

export const useDemoConfirmation = () => {
  const { formData, onHandleBack } = useFormStepper<SignupFormDataType>();
  const [errors, setErrors] = useState<string>('');
  const signup = useSignupApi();
  const router = useRouter();
  const space = useRouteName();
  const [timezone] = useTimezone();
  const handleConfirmationStep = () => {
    signup.mutate(formData, {
      onSuccess: () => {
        showSuccesMessage(
          translate('signupStepDemoPlanningConfirmation.requestSend')
        );
        router.push(`/(${space})/(public)/login`);
      },
      onError: (error) => {
        showError(error);
        setErrors(error.message);
        console.error('Signup request error:', error);
      },
    });
  };
  return { formData, timezone, errors, handleConfirmationStep, onHandleBack };
};
