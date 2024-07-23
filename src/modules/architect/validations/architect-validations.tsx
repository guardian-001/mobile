import { z } from 'zod';

import { VALID_CITIES, VALID_WORK_SURFACES } from '@/shared/constants';

export const specialityValidation = z.number().refine((value) => value > 0, {
  message: 'validations.required',
});

export const cityValidation = z
  .enum(VALID_CITIES, {
    message: 'validations.invalid-city',
  })
  .optional();
export const workSurfaceValidation = z
  .enum(VALID_WORK_SURFACES, {
    message: 'validations.invalid-work-surface',
  })
  .optional();

export const imagesValidation = z
  .array(
    z.number().int({
      message: 'validations.invalid-integer',
    }),
    {
      message: 'validations.required',
    }
  )
  .refine((images) => new Set(images).size === images.length, {
    message: 'validations.unique-items',
  });

export const categoryValidation = z.number().refine((value) => value > 0, {
  message: 'validations.required',
});
