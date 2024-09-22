import { isError } from 'lodash';

import { useDeleteProductApi } from '@/api/supplier/catalogue/use-delete-product';
import { translate } from '@/core';
import {
  showErrorMessage,
  showSuccesMessage,
  useModal,
} from '@/shared/components';

import { useEditCollection } from './use-edit-collection';

export const useDeleteProduct = (selectedProductId: string) => {
  const { ref, present, dismiss } = useModal();
  const { refetch } = useEditCollection();

  const { mutate } = useDeleteProductApi();

  const onSubmit = () => {
    mutate(selectedProductId, {
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
