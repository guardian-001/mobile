import { useState } from 'react';

interface StepperNavigationProps {
  initialStep?: number;
  maxSteps: number;
}

export const useStepperSpeacialNavigation = ({
  initialStep = 0,
  maxSteps,
}: StepperNavigationProps) => {
  const [step, setStep] = useState(initialStep);
  const [formData, setFormData] = useState();

  const handleNextStep = () => {
    if (step < maxSteps) {
      setStep(step + 1);
      setFormData((prev: any) => ({ ...prev, rollback: false }));
    }
  };

  const handlePreviousStep = () => {
    if (step > 0) {
      setStep(step - 1);
      setFormData((prev: any) => ({ ...prev, rollback: true }));
    }
  };
  return {
    step,
    handleNextStep,
    handlePreviousStep,
    setFormData,
    formData,
  };
};
