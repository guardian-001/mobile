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

export type Collection = {
  id: number;
  title: string;
  categoryLabel: string;
  products: Product[];
  appearance: 'Petite' | 'Grande';
};

export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  productImages: [
    {
      id: number;
      image: string;
    }
  ];
  collectionCategory: string;
  collectionTitle: string;
  order: 0;
  display: false;
};
