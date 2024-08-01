import { z } from 'zod';

import {
  fieldValidation,
  idValidation,
  phoneValidation,
} from '@/shared/validations';

export const FirstConnectionSchema = z.object({
  entrepriseName: fieldValidation,
  specialty: fieldValidation,
  phone: phoneValidation,
  AdresseBureau: fieldValidation,
  entrepriseCategory: idValidation,
});

export const CreateAccountSchema = z.object({
  entrepriseName: fieldValidation,
  specialty: fieldValidation,
  phone: phoneValidation,
  AdresseBureau: fieldValidation,
});

export const IntrestSchema = z.object({
  entrepriseCategory: idValidation,
});
