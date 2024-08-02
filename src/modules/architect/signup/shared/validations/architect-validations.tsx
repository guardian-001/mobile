import { z } from 'zod';

import { VALID_CITIES, VALID_WORK_SURFACES } from '@/shared/constants';

export const specialityValidation = z.number().refine((value) => value > 0, {
  message: 'validations.required',
});

export const cityValidation = z
  .enum(VALID_CITIES, {
    message: 'validations.invalidCity',
  })
  .optional();
export const workSurfaceValidation = z
  .enum(VALID_WORK_SURFACES, {
    message: 'validations.invalidWorkSurface',
  })
  .optional();

export const imagesValidation = z
  .array(
    z.number().int({
      message: 'validations.invalidInteger',
    })
  )
  .refine((images) => new Set(images).size === images.length, {
    message: 'validations.uniqueItems',
  });

export const idValidation = z
  .number()
  .refine((value) => value > 0, {
    message: 'validations.required',
  })
  .optional();
