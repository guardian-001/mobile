import { z } from 'zod';

import {
  fieldValidation,
  requiredShortTextValidation,
  requiredValidation,
} from '@/shared/validations';

export const CompanyInformationSchema = z.object({
  companyName: requiredShortTextValidation,
  companySpeciality: requiredShortTextValidation,
  companyAddress: fieldValidation,
  phoneNumber: requiredValidation,
});
