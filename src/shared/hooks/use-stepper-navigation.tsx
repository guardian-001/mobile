import { useRouter } from 'expo-router';
import { useState } from 'react';

interface StepperNavigationProps {
  initialStep?: number;
  maxSteps: number;
}

export const useStepperNavigation = ({
  initialStep = 0,
  maxSteps,
}: StepperNavigationProps) => {
  const [step, setStep] = useState(initialStep);
  const route = useRouter();

  const handleNextStep = () => {
    if (step < maxSteps - 1) {
      setStep(step + 1);
    }
  };

  const handlePreviousStep = () => {
    if (step > 0) {
      setStep(step - 1);
    } else {
      route.replace('(architect)/(public)/login');
    }
  };

  return {
    step,
    handleNextStep,
    handlePreviousStep,
  };
};
