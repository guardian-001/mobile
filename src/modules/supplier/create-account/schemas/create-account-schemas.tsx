import { z } from 'zod';

import {
  arrayOfNonEmptyNumbers,
  phoneValidation,
  requiredValidation,
} from '@/shared/validations';

export const FirstConnectionSchema = z.object({
  companyName: requiredValidation,
  phoneNumber: phoneValidation,
  companySpeciality: requiredValidation,
  companyAddress: requiredValidation,
  specialityType: arrayOfNonEmptyNumbers,
  appearance: requiredValidation,
});
export const DetailsSchema = z.object({
  companyName: requiredValidation,
  phoneNumber: phoneValidation,
  companySpeciality: requiredValidation,
  companyAddress: requiredValidation,
});

export const specialityTypeSchema = z.object({
  specialityType: arrayOfNonEmptyNumbers,
});
export const appearanceSchema = z.object({
  appearance: requiredValidation,
});
