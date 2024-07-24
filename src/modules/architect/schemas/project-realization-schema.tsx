import { z } from 'zod';

import {
  cityValidation,
  imagesValidation,
  workSurfaceValidation,
} from '@/modules/architect/validations';
import {
  fieldValidation,
  intArrayValidation,
  integerValidation,
} from '@/shared/validations';

export const ProjectRealizationSchema = z.object({
  projectName: fieldValidation,
  architect: integerValidation,
  needs: intArrayValidation,
  address: fieldValidation,
  city: cityValidation,
  workSurface: workSurfaceValidation,
  description: fieldValidation,
  architecturalStyle: integerValidation,
  realizationImages: imagesValidation,
  projectCategory: integerValidation,
});

export const ProjectCategorySchema = z.object({
  projectCategory: integerValidation,
});

export const ArchitecturalStyleSchema = z.object({
  architecturalStyle: integerValidation,
});
