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
  const [scroller, setScroller] = useState(100 / maxSteps);

  const handleNextStep = () => {
    if (step < maxSteps) {
      setStep(step + 1);
      setScroller(scroller + 100 / maxSteps);
    }
  };

  const handlePreviousStep = () => {
    if (step > 0) {
      setStep(step - 1);
      setScroller(scroller - 100 / maxSteps);
    }
  };
  return {
    step,
    scroller,
    handleNextStep,
    handlePreviousStep,
  };
};
