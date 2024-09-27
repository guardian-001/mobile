import { z } from 'zod';

import {
  emailValidation,
  fieldValidation,
  idValidation,
  phoneValidation,
} from '@/shared/validations';

import { dateFromStringValidation, urlValidation } from '../validations';

export const userSchema = z.object({
  id: idValidation,
  username: fieldValidation,
  email: emailValidation,
  firstName: fieldValidation,
  lastName: fieldValidation,
  phoneNumber: phoneValidation,
  userType: fieldValidation,
  image: fieldValidation,
});

export const architectSocialMediaSchema = z.object({
  id: idValidation,
  createdAt: dateFromStringValidation,
  updatedAt: dateFromStringValidation,
  facebook: urlValidation,
  instagram: urlValidation,
  website: urlValidation,
});

export const architectProfileInfoSchema = z.object({
  id: idValidation,
  user: userSchema,
  // socialLinks: architectSocialMediaSchema,
  // specialityType: specialityTypeSchema,
  // createdAt: dateFromStringValidation,
  // updatedAt: dateFromStringValidation,
  // profileImage: urlValidation,
  // coverImage: urlValidation,
  // isPublic: z.boolean(),
  // companyAddress: fieldValidation,
  // companySpeciality: fieldValidation,
  // bio: fieldValidation,
  // companyName: fieldValidation,
  // presentationVideo: urlValidation,
  // appearance: fieldValidation,
});
