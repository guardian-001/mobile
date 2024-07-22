import { z } from 'zod';

import {
  dateValidation,
  emailValidation,
  fieldValidation,
  phoneValidation,
  specialityValidation,
  timeValidation,
} from '@/validations';

export const SignupFormSchema = z.object({
  firstName: fieldValidation,
  lastName: fieldValidation,
  email: emailValidation,
  phoneNumber: phoneValidation,
  address: fieldValidation,
  architectIdentifier: fieldValidation,
  architectSpeciality: specialityValidation,
  date: dateValidation,
  timeSlot: timeValidation,
});
export const CreateAccountSchema = z.object({
  firstName: fieldValidation,
  lastName: fieldValidation,
  email: emailValidation,
  phoneNumber: phoneValidation,
  address: fieldValidation,
  architectIdentifier: fieldValidation,
});
export const SpecialityFormSchema = z.object({
  architectSpeciality: specialityValidation,
});

export const DemoFormSchema = z.object({
  date: dateValidation,
  timeSlot: timeValidation,
});
