import type { Dispatch, ReactNode, SetStateAction } from 'react';
import React, { createContext, useContext, useState } from 'react';

interface IFormContext<T> {
  formData: T;
  setFormData: Dispatch<SetStateAction<T>>;
  onHandleBack: () => void;
  onHandleNext: () => void;
  step: number;
  maxStep?: number;
}

const defaultContext: IFormContext<any> = {
  formData: {},
  onHandleBack: () => {},
  onHandleNext: () => {},
  setFormData: () => {},
  step: 0,
  maxStep: 0,
};

export const FormContext = createContext<IFormContext<any>>(defaultContext);

interface IProps<T> {
  children: ReactNode;
  initialData: T;
  maxStep?: number;
}

export function FormProvider<T>({ children, initialData, maxStep }: IProps<T>) {
  const [formData, setFormData] = useState<T>(initialData);
  const [step, setStep] = useState(0);

  function onHandleNext() {
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
        maxStep,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export function useFormStepper<T>() {
  return useContext(FormContext) as IFormContext<T>;
}
