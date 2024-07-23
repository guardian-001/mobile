import { z } from 'zod';

import {
  cityValidation,
  idValidation,
  workSurfaceValidation,
} from '@/modules/architect/validations';
import {
  fieldValidation,
  imagesValidation,
  intArrayValidation,
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
