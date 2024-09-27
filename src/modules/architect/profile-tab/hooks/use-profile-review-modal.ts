import { translate } from '@/core';
import { showSuccesMessage, useModal } from '@/shared/components';

export const useProfileReview = () => {
  const { ref, present, dismiss } = useModal();
  // const report = useReportApi();
  const onSubmit = () => {
    showSuccesMessage(translate('architectProfile.Signal'));
    dismiss();
    // report.mutate()
  };

  return {
    ref,
    present,
    dismiss,
    onSubmit,
  };
};
