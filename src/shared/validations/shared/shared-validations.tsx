import { z } from 'zod';

export const integerValidation = z
  .number({
    message: 'validations.required',
  })
  .int({ message: 'validations.invalidInteger' });

export const intArrayValidation = z
  .array(
    z.number().int({
      message: 'validations.invalidInteger',
    }),
    {
      message: 'validations.required',
    }
  )
  .refine((arr) => arr.length > 0, {
    message: 'validations.arrayNonEmpty',
  });

export const requiredValidation = z
  .string({ message: 'validations.required' })
  .min(1, { message: 'validations.required' });

export const requiredLongTextValidation = z
  .string({ message: 'validations.required' })
  .min(50, { message: 'validations.requiredMinTextSize' });
export const notRequiredValidation = z.string().optional();

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
  .regex(/^[a-zA-Z0-9_ \u00C0-\u00FF]+$/, {
    message: 'validations.fieldShape',
  });

export const phoneValidation = z
  .string({ message: 'validations.required' })
  .min(1, { message: 'validations.required' })
  .regex(/^\+?\d+$/, { message: 'validations.phoneNumberDigits' })
  .min(8, { message: 'validations.phoneNumberMinLength' })
  .max(15, { message: 'validations.phoneNumberMaxLength' });
export const arrayOfNonEmptyStrings = z
  .array(
    z.string().nonempty({
      message: 'Required',
    })
  )
  .refine((arr) => arr.length > 0, {
    message: 'arrayNonEmptyString',
  });
export const requiredValidationNumber = z
  .number()
  .refine((value) => value > 0, {
    message: 'validations.chooseOption',
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
    message: 'validations.arrayNonEmpty',
  });
export const dateValidation = z
  .string({ message: 'validations.required' })
  .regex(/^\d{4}-\d{2}-\d{2}$/, { message: 'validations.invalidDateFormat' });

export const timeValidation = z
  .string({ message: 'validations.required' })
  .regex(/^\d{2}:\d{2}$/, { message: 'validations.invalidTimeFormat' });
export const imagesValidation = z
  .array(
    z.object({
      name: z.string({
        message: 'validations.invalidName',
      }),
      uri: z.string().url({
        message: 'validations.invalidUrl',
      }),
      type: z.string({ message: 'validations.invalidType' }),
    }),
    {
      message: 'validations.required',
    }
  )
  .refine(
    (images) =>
      new Set(images.map((image) => image.uri)).size === images.length,
    {
      message: 'validations.uniqueItems',
    }
  );
export const specialityValidation = z.number().refine((value) => value > 0, {
  message: 'validations.required',
});

export const idValidation = z.number().refine((value) => value > 0, {
  message: 'validations.required',
});

export const idStringValidation = z.string({ message: 'validations.required' });

export const facebookValidation = z
  .string()
  .regex(/^https:\/\/(www\.)?facebook\.com\/[a-zA-Z0-9(\\.\\?)?]/, {
    message: 'validations.invalidUrl',
  });

export const websiteValidation = z
  .string()
  .regex(/^(https?:\/\/)?([\w\\-]+\.)+[\w\\-]+(\/[\w\\-]*)*\/?$/, {
    message: 'validations.invalidUrl',
  })
  .optional();

export const instagramValidation = z
  .string()
  .regex(/^https:\/\/(www\.)?instagram\.com\/[a-zA-Z0-9(\\.\\?)?]/, {
    message: 'validations.invalidUrl',
  });
export const cardNameValidation = z
  .string()
  .min(1, 'validations.cardRequired') // Use 'required' to match the key in the translation file
  .refine((value) => value.trim().length > 0, {
    message: 'validations.cardRequired',
  });

export const cvvValidation = z
  .string()
  .regex(/^\d{3,4}$/, 'validations.cvvInvalid'); // Use 'cvvInvalid' to match the key in the translation file

export const cardNumberValidation = z
  .string()
  .regex(/^\d{16}$/, 'validations.cardNumberInvalid'); // Use 'cardNumberInvalid' to match the key in the translation file

export const expirationDateValidation = z
  .string()
  .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, 'validations.expirationDateInvalid'); // Use 'expirationDateInvalid' to match the key in the translation file

export const numberNonNegativeValidation = z
  .number()
  .nonnegative('validations.numberNonNegative'); // Use 'numberNonNegative' to match the key in the translation file

export const numberNonNegativeIntegerValidation = z
  .number()
  .int()
  .nonnegative('validations.numberNonNegativeInteger'); // Use 'numberNonNegativeInteger' to match the key in the translation file

export const urlValidation = z.string().url('validations.urlInvalid'); // Use 'urlInvalid' to match the key in the translation file

export const numberPositiveValidation = z
  .number()
  .positive('validations.numberPositive');
