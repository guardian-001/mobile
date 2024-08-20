import { useFormStepper } from '@/shared';

import type { InspirationRequestType } from '../types';

export const useSwipeRight = () => {
  const { onHandleNext } = useFormStepper<InspirationRequestType>();

  const onSubmit = () => {
    onHandleNext();
  };

  return {
    onHandleNext,
    onSubmit,
  };
};
