import { z } from 'zod';

export const requiredValidation = z.string().nonempty({
  message: 'Required',
});

export const emailValidation = z
  .string()
  .email({ message: 'Invalid email format' })
  .max(100, { message: 'Email must be at most 100 characters' });

export const passwordValidation = z
  .string()
  .min(8, { message: 'Password must be at least 6 characters' })
  .regex(/[a-z]/, { message: 'password-lowercase' })
  .regex(/[A-Z]/, { message: 'password-uppercase' })
  .regex(/[0-9]/, { message: 'password-digit' })
  .regex(/[^a-zA-Z0-9]/, { message: 'password-special-char' });

export const fieldValidation = z
  .string()
  .min(3, { message: 'field-min-length' })
  .max(30, { message: 'field-max-length' })
  .regex(/^[a-zA-Z0-9_]+$/, { message: 'field-shape' });

export const confirmPasswordValidation = (password: string) =>
  z.string().refine((val) => val === password, {
    message: 'Passwords do not match',
  });
