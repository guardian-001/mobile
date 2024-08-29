import { z } from 'zod';

import {
  fieldValidation,
  idStringValidation,
  idValidation,
} from '@/shared/validations';

export const collectionIdSchema = z.object({
  collection: idValidation,
});

export const collectionSchema = z.object({
  title: fieldValidation,
  category: idStringValidation,
  appearance: fieldValidation,
  visibility: z.boolean(),
});

const productImageSchema = z.object({
  id: z.number().nonnegative(),
  image: z.string().url(),
});

export const productSchema = z.object({
  id: z.number().nonnegative(),
  name: z.string().min(1, 'Name is required'),
  price: z.number().positive('Price must be greater than zero'),
  description: z.string().min(1, 'Description is required'),
  productImages: z
    .array(productImageSchema)
    .min(1, 'At least one image is required'),
  collectionCategory: z.string().min(1, 'Category is required'),
  collectionTitle: z.string().min(1, 'Title is required'),
  order: z.number().int().nonnegative(),
  display: z.boolean(),
});
