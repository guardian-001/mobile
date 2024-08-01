// passwordValidation.ts
import type { TxKeyPath } from '@/core';

export const getPasswordRequirements = (
  newPassword: string,
  confirmNewPassword: string
) => {
  const requirements: { isValid: boolean; message: TxKeyPath }[] = [
    {
      isValid: newPassword?.length >= 8,
      message: 'resetpass.passwordMinLength',
    },
    {
      isValid: /[a-z]/.test(newPassword) && newPassword?.length >= 1,
      message: 'resetpass.passwordLowercase',
    },
    {
      isValid: /[A-Z]/.test(newPassword),
      message: 'resetpass.passwordUppercase',
    },
    {
      isValid: /[0-9]/.test(newPassword),
      message: 'resetpass.passwordDigit',
    },
    {
      isValid: /[^a-zA-Z0-9]/.test(newPassword),
      message: 'resetpass.passwordSpecialChar',
    },
    {
      isValid:
        confirmNewPassword === newPassword &&
        confirmNewPassword !== '' &&
        newPassword !== '',
      message: 'resetpass.passwordConfirmation',
    },
  ];

  const allValid = requirements.every((requirement) => requirement.isValid);

  return {
    requirements,
    allValid,
  };
};
