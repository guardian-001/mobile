import { z } from 'zod';

export const urlValidation = z.string().url().optional().nullable();
export const dateFromStringValidation = z.string().datetime();
