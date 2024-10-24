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
    z.object({
      name: z.string({
        message: 'validations.invalidName',
      }),
      uri: z.string().url({
        message: 'validations.invalidUrl',
      }),
      image: z
        .string()
        .url({
          message: 'validations.invalidUrl',
        })
        .optional(),
      type: z.string({ message: 'validations.invalidType' }),
    })
  )
  .refine(
    (images) =>
      new Set(images.map((image) => image.uri)).size === images.length,
    {
      message: 'validations.uniqueItems',
    }
  )
  .optional();
