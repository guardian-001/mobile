import { z } from 'zod';

import {
  fieldValidation,
  idValidation,
  intArrayValidation,
} from '@/shared/validations';

import {
  cityValidation,
  imagesValidation,
  workSurfaceValidation,
} from '../validations';

export const ProjectRealizationSchema = z.object({
  projectName: fieldValidation,
  needs: intArrayValidation,
  address: cityValidation,
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
export const ProjectDetailsSchema = z.object({
  projectName: fieldValidation,
  address: cityValidation,
  workSurface: workSurfaceValidation,
  description: fieldValidation,
});

export const ImagesRealizationSchema = z.object({
  realizationImages: imagesValidation,
});
