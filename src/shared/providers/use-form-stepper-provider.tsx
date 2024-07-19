import type { Dispatch, ReactNode, SetStateAction } from 'react';
import React, { createContext, useContext, useState } from 'react';

interface IFormContext<T> {
  formData: T;
  setFormData: Dispatch<SetStateAction<T>>;
  onHandleBack: () => void;
  onHandleNext: () => void;
  step: number;
}

const defaultContext: IFormContext<any> = {
  formData: {},
  onHandleBack: () => {},
  onHandleNext: () => {},
  setFormData: () => {},
  step: 0,
};

export const FormContext = createContext<IFormContext<any>>(defaultContext);

interface IProps<T> {
  children: ReactNode;
  initialData: T;
}

export function FormProvider<T>({ children, initialData }: IProps<T>) {
  const [formData, setFormData] = useState<T>(initialData);
  const [step, setStep] = useState(0);

  function onHandleNext() {
    console.log(step);
    setStep((prev) => prev + 1);
    setFormData((prev) => ({ ...prev, rollback: false }));
  }

  function onHandleBack() {
    setStep((prev) => prev - 1);
    setFormData((prev) => ({ ...prev, rollback: true }));
  }

  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
        onHandleBack,
        onHandleNext,
        step,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export function useFormStepper<T>() {
  return useContext(FormContext) as IFormContext<T>;
}
