import { z } from 'zod';

export const requiredValidation = z.string({ message: 'validations.required' });
export const requiredValidationBoolean = z
  .boolean()
  .refine((value) => value === true, { message: 'validations.required' });
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
  .min(1, { message: 'validations.required' })
  .regex(/^\d+$/, { message: 'validations.phone-number-digits' })
  .min(8, { message: 'validations.phone-number-min-length' })
  .max(15, { message: 'validations.phone-number-max-length' });

export const requiredValidationNumber = z
  .number()
  .refine((value) => value > 0, {
    message: 'validations.required',
  });

export const arrayOfNonEmptyImage = z
  .array(
    z.object({
      name: z.string(),
      url: z.string(),
    })
  )
  .nonempty({ message: 'validations.arrayNonEmptyImage' });

export const arrayOfNonEmptyNumbers = z
  .array(
    z.number().refine((num) => num !== null && num !== undefined, {
      message: 'validations.required',
    })
  )
  .refine((arr) => arr.length > 0, {
    message: 'validations.arrayNonEmptyNumbers',
  });
export const dateValidation = z
  .string({ message: 'validations.required' })
  .regex(/^\d{4}-\d{2}-\d{2}$/, { message: 'validations.invalid-date-format' });

export const timeValidation = z
  .string({ message: 'validations.required' })
  .regex(/^\d{2}:\d{2}$/, { message: 'validations.invalid-time-format' });
