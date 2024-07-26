import type { Dispatch, SetStateAction } from 'react';
import { createContext, useContext } from 'react';

interface IFormContext {
  formData: any;
  setFormData: Dispatch<SetStateAction<any>>;
}

export const FormContext = createContext<IFormContext>({
  formData: {},
  setFormData: () => {},
});

export function useLoginForm() {
  return useContext(FormContext);
}
