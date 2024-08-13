import { z } from 'zod';

import { fieldValidation, requiredValidation } from '@/shared/validations';

export const CompanyInformationSchema = z.object({
  companyName: fieldValidation,
  companySpeciality: fieldValidation,
  companyAddress: fieldValidation,
  phoneNumber: requiredValidation,
});
