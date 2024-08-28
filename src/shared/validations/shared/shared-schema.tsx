import { z } from 'zod';

import {
  cardNameValidation,
  cardNumberValidation,
  cvvValidation,
  dateValidation,
  emailValidation,
  expirationDateValidation,
  facebookValidation,
  fieldValidation,
  instagramValidation,
  notRequiredValidationBoolean,
  passwordValidation,
  requiredValidation,
  specialityValidation,
  timeValidation,
  websiteValidation,
} from './shared-validations';

export const ConfirmPasswordSchema = z
  .object({
    password: passwordValidation,
    confirmPassword: passwordValidation,
  })
  .refine(
    (values) => {
      return values.password === values.confirmPassword;
    },
    {
      message: 'validations.confirmPassword',
      path: ['confirmPassword'],
    }
  );

export const EmailSchema = z.object({
  email: emailValidation,
});

export const PasswordSchema = z.object({
  password: passwordValidation,
});

export const LoginFormSchema = z.object({
  email: emailValidation,
  password: requiredValidation,
});

export const OTPSchema = z.object({
  OTP: requiredValidation,
});

export const BasicInfoFormSchema = z.object({
  name: requiredValidation,
  lastName: requiredValidation,
  email: emailValidation,
  number: requiredValidation,
});

export const NotificationFormSchema = z.object({
  new: notRequiredValidationBoolean,
  activity: notRequiredValidationBoolean,
  newNavigator: notRequiredValidationBoolean,
});

export const SpecialityFormSchema = z.object({
  architectSpeciality: specialityValidation,
});

export const ResetPassFormSchema = z.object({
  email: emailValidation,
  password: passwordValidation,
  confirmPassword: passwordValidation,
});
export const CalendarFormSchema = z.object({
  date: dateValidation,
  timeSlot: timeValidation,
});

export const SocialLinksSchema = z.object({
  facebook: facebookValidation,
  website: websiteValidation,
  instagram: instagramValidation,
});

export const BankCardSchema = z.object({
  cardName: cardNameValidation,
  cvv: cvvValidation,
  cardNumber: cardNumberValidation,
  expirationDate: expirationDateValidation,
});

export const SearchSchema = z.object({
  search: fieldValidation,
});
