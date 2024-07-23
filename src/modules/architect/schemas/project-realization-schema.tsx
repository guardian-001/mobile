import { z } from 'zod';

import {
  categoryValidation,
  cityValidation,
  workSurfaceValidation,
} from '@/modules/architect/validations';
import {
  fieldValidation,
  imagesValidation,
  intArrayValidation,
  integerValidation,
  requiredIntegerValidation,
} from '@/validations';

export const ProjectRealizationSchema = z.object({
  projectName: fieldValidation,
  architect: requiredIntegerValidation,
  needs: intArrayValidation,
  address: fieldValidation,
  city: cityValidation,
  workSurface: workSurfaceValidation,
  description: fieldValidation,
  architecturalStyle: integerValidation,
  realizationImages: imagesValidation,
  projectCategory: categoryValidation,
});

export const ProjectCategorySchema = z.object({
  projectCategory: integerValidation,
});

export const ArchitecturalStyleSchema = z.object({
  architecturalStyle: integerValidation,
});
