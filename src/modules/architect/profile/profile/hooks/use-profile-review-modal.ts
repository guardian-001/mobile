import { useModal } from '@/shared/components';

export const useProfileReview = () => {
  const { ref, present, dismiss } = useModal();
  // const report = useReportApi();
  const onSubmit = () =>
    // data: ReportRview
    {
      // report.mutate(data, {
      //   onSuccess: () => {
      //     showSuccesMessage(translate('architectProfile.Signal'));
      //     dismiss();
      //   },
      //   onError: (errorApi) => {
      //     showErrorMessage(errorApi.message);
      //   },
      // });
    };

  return {
    ref,
    present,
    dismiss,
    onSubmit,
  };
};
