import type { z } from 'zod';

import type { createProductSchema } from '../schema/collection-schema';

export type createProductType = z.infer<typeof createProductSchema>;
export type ImagesCreatePRoductFormType = Pick<
  createProductType,
  'productImages'
>;
export type ImageInfo = {
  name: string | null | undefined;
  uri: string;
  type?: string | undefined;
};
