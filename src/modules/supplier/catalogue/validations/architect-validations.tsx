import { z } from 'zod';

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
    })
  )
  .refine(
    (images) =>
      new Set(images.map((image) => image.uri)).size === images.length,
    {
      message: 'validations.uniqueItems',
    }
  );
