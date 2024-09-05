import { isError } from 'lodash';

import { useDeleteProductApi } from '@/api/supplier/catalogue/use-delete-product';
import { translate } from '@/core';
import {
  showErrorMessage,
  showSuccesMessage,
  useModal,
} from '@/shared/components';
import { error } from '@/theme/colors';

export const useDeleteProduct = (selectedProductId: string) => {
  const { ref, present, dismiss } = useModal();

  const { mutate } = useDeleteProductApi();

  const onSubmit = () => {
    mutate(selectedProductId, {
      onSuccess: () => {
        showSuccesMessage(translate('catalogue.createProduct.success'));
        dismiss();
      },
      onError: () => {
        showErrorMessage(translate('catalogue.createProduct.echec'));
        dismiss();
      },
    });
    dismiss();
  };

  return {
    error,
    ref,
    present,
    dismiss,
    onSubmit,
    isError,
  };
};
