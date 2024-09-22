import { isError } from 'lodash';

import { useDeleteCollectionApi } from '@/api/supplier/catalogue/use-delete-collection';
import { translate } from '@/core';
import {
  showErrorMessage,
  showSuccesMessage,
  useModal,
} from '@/shared/components';

import { useCollection } from './use-collection';

export const useDeleteCollection = (selectedCollectionId: string) => {
  const { ref, present, dismiss } = useModal();
  const { refetch } = useCollection();
  const { mutate } = useDeleteCollectionApi();

  const onSubmit = () => {
    mutate(selectedCollectionId, {
      onSuccess: () => {
        showSuccesMessage(
          translate('catalogue.createCollection.successDelete')
        );
        dismiss();
        refetch();
      },
      onError: () => {
        showErrorMessage(translate('catalogue.createCollection.echecDelete'));
        dismiss();
      },
    });
    dismiss();
  };

  return {
    ref,
    present,
    dismiss,
    onSubmit,
    isError,
  };
};
