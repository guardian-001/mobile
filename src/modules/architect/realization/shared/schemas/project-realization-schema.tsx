import { z } from 'zod';

import {
  cityValidation,
  idValidation,
  workSurfaceValidation,
} from '@/modules/architect/shared/validations';
import {
  fieldValidation,
  imagesValidation,
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
  architecturalStyle: idValidation,
  realizationImages: imagesValidation,
  projectCategory: idValidation,
});

export const ProjectCategorySchema = z.object({
  projectCategory: idValidation,
});

export const ArchitecturalStyleSchema = z.object({
  architecturalStyle: idValidation,
});

export const NeedsSchema = z.object({
  needs: intArrayValidation,
});
