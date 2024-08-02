import { z } from 'zod';

import {
  arrayOfNonEmptyStrings,
  phoneValidation,
  requiredValidation,
} from '@/shared/validations';

export const FirstConnectionSchema = z.object({
  companyName: requiredValidation,
  phoneNumber: phoneValidation,
  companySpeciality: requiredValidation,
  companyAddress: requiredValidation,
  specialityType: arrayOfNonEmptyStrings,
  appearance: requiredValidation,
});
export const DetailsSchema = z.object({
  companyName: requiredValidation,
  phoneNumber: phoneValidation,
  companySpeciality: requiredValidation,
  companyAddress: requiredValidation,
});

export const specialityTypeSchema = z.object({
  specialityType: arrayOfNonEmptyStrings,
});
export const appearanceSchema = z.object({
  appearance: requiredValidation,
});
