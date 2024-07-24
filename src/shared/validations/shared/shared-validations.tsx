import { z } from 'zod';

export const integerValidation = z
  .number({
    message: 'validations.required',
  })
  .int({ message: 'validations.invalid-integer' });

export const intArrayValidation = z.array(
  z.number().int({
    message: 'validations.invalid-integer',
  }),
  {
    message: 'validations.required',
  }
);

export const requiredValidation = z.string({ message: 'validations.required' });
export const requiredValidationBoolean = z
  .boolean()
  .refine((value) => value === true, { message: 'validations.required' });
export const notRequiredValidationBoolean = z.boolean().optional();
export const emailValidation = z
  .string({ message: 'validations.required' })
  .min(1, { message: 'validations.required' })
  .email({ message: 'validations.invalid' })
  .max(100, { message: 'validations.emailMaxLength' });

export const passwordValidation = z
  .string({ message: 'validations.required' })
  .min(1, { message: 'validations.required' })
  .min(8, { message: 'validations.passwordMinLength' })
  .regex(/[a-z]/, { message: 'validations.passwordLowercase' })
  .regex(/[A-Z]/, { message: 'validations.passwordUppercase' })
  .regex(/[0-9]/, { message: 'validations.passwordDigit' })
  .regex(/[^a-zA-Z0-9]/, { message: 'validations.passwordSpecialChar' });

export const fieldValidation = z
  .string({ message: 'validations.required' })
  .min(1, { message: 'validations.required' })
  .min(3, { message: 'validations.fieldMinLength' })
  .max(50, { message: 'validations.fieldMaxLength' })
  .regex(/^[a-zA-Z0-9_]+$/, { message: 'validations.fieldShape' });

export const phoneValidation = z
  .string({ message: 'validations.required' })
  .min(1, { message: 'validations.required' })
  .regex(/^\d+$/, { message: 'validations.phoneNumberDigits' })
  .min(8, { message: 'validations.phoneNumberMinLength' })
  .max(15, { message: 'validations.phoneNumberMaxLength' });

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
export const imagesValidation = z
  .array(
    z.object({
      name: z.string({
        message: 'validations.invalid-name',
      }),
      url: z.string().url({
        message: 'validations.invalid-url',
      }),
    }),
    {
      message: 'validations.required',
    }
  )
  .refine(
    (images) =>
      new Set(images.map((image) => image.url)).size === images.length,
    {
      message: 'validations.unique-items',
    }
  );
export const specialityValidation = z.number().refine((value) => value > 0, {
  message: 'validations.required',
});
