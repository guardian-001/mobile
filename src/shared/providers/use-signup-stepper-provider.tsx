import type { Dispatch, ReactNode, SetStateAction } from 'react';
import React, { createContext, useContext, useState } from 'react';

interface IFormContext {
  formData: any;
  setFormData: Dispatch<SetStateAction<any>>;
  onHandleBack: () => void;
  onHandleNext: () => void;
  step: number;
}

export const FormContext = createContext<IFormContext>({
  formData: {},
  onHandleBack: () => {},
  onHandleNext: () => {},
  setFormData: () => {},
  step: 1,
});

interface IProps {
  children: ReactNode;
}

export function FormProvider({ children }: IProps) {
  const [formData, setFormData] = useState();
  const [step, setStep] = useState(1);

  function onHandleNext() {
    setStep((prev) => prev + 1);
    setFormData((prev: any) => ({ ...prev, rollback: false }));
  }

  function onHandleBack() {
    setStep((prev) => prev - 1);
    setFormData((prev: any) => ({ ...prev, rollback: true }));
  }

  return (
    <FormContext.Provider
      value={{ formData, setFormData, onHandleBack, onHandleNext, step }}
    >
      {children}
    </FormContext.Provider>
  );
}

export function useFormStepper() {
  return useContext(FormContext);
}
