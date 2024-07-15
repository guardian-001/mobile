import { z } from 'zod';

export const requiredValidation = z.string({
  message: 'validations.required',
});
export const requiredValidationBoolean = z.boolean({
  message: 'validations.required',
});
export const notRequiredValidationBoolean = z.boolean().optional();
export const emailValidation = z
  .string({ message: 'validations.required' })
  .email({ message: 'validations.invalid' })
  .max(100, { message: 'validations.email-max-length' });

export const passwordValidation = z
  .string({ message: 'validations.required' })
  .min(8, { message: 'validations.password-min-length' })
  .regex(/[a-z]/, { message: 'validations.password-lowercase' })
  .regex(/[A-Z]/, { message: 'validations.password-uppercase' })
  .regex(/[0-9]/, { message: 'validations.password-digit' })
  .regex(/[^a-zA-Z0-9]/, { message: 'validations.password-special-char' });

export const fieldValidation = z
  .string({ message: 'validations.required' })
  .min(3, { message: 'validations.field-min-length' })
  .max(50, { message: 'validations.field-max-length' })
  .regex(/^[a-zA-Z0-9_]+$/, { message: 'validations.field-shape' });

export const phoneValidation = z
  .string({ message: 'validations.required' })
  .regex(/^\d+$/, { message: 'validations.phone-number-digits' })
  .min(8, { message: 'validations.phone-number-min-length' })
  .max(15, { message: 'validations.phone-number-max-length' });

export const SpecialityEnum = z.enum(['construction', 'interior']);

export const specialityValidation = SpecialityEnum.refine(
  (val) => val === 'construction' || val === 'interior',
  { message: 'validations.invalid-speciality' }
);

export const dateValidation = z
  .string({ message: 'validations.required' })
  .regex(/^\d{4}-\d{2}-\d{2}$/, { message: 'validations.invalid-date-format' })
  .transform((date) => new Date(date));

export const timeValidation = z
  .string({ message: 'validations.required' })
  .regex(/^\d{2}:\d{2}$/, { message: 'validations.invalid-time-format' });
