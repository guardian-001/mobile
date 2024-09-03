import { z } from 'zod';

import {
  fieldValidation,
  idStringValidation,
  idValidation,
  numberNonNegativeIntegerValidation,
  numberNonNegativeValidation,
  numberPositiveValidation,
  requiredValidation,
  requiredValidationBoolean,
  urlValidation,
} from '@/shared/validations';

import { productImageValidation } from '../validations/collection-validation';

export const collectionIdSchema = z.object({
  collection: idValidation,
});

export const collectionSchema = z.object({
  title: fieldValidation,
  category: idStringValidation,
  appearance: fieldValidation,
  visibility: requiredValidationBoolean,
});

export const productImageSchema = z.object({
  id: numberNonNegativeValidation,
  image: urlValidation,
});

export const productSchema = z.object({
  id: numberNonNegativeValidation,
  name: requiredValidation,
  price: numberPositiveValidation,
  description: requiredValidation,
  productImages: productImageValidation,
  collectionCategory: requiredValidation,
  collectionTitle: requiredValidation,
  order: numberNonNegativeIntegerValidation,
  display: requiredValidationBoolean,
});
