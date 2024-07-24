import type { z } from 'zod';

import type { EmailSchema, ResetPassFormSchema } from '@/validations';

export type LoginFormSupplierType = z.infer<typeof EmailSchema>;
export type ResetPassFormType = z.infer<typeof ResetPassFormSchema>;
export type Category = {
  id: number;
  label: string;
  icon: string;
};

export type Style = {
  id: number;
  label: string;
  icon: string;
};
export type Need = {
  id: number;
  label: string;
  icon: string;
};
export type Image = {
  name: string;
  ulr: string;
};
