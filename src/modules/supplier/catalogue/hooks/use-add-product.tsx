import { isError } from 'lodash';
import type * as z from 'zod';

import { useCreateProductApi } from '@/api/supplier/catalogue/use-create-product';
import { translate, useCustomForm } from '@/core';
import {
  showErrorMessage,
  showSuccesMessage,
  useModal,
} from '@/shared/components';

import { productSchema } from '../../profile/schemas/collection-schema';

type ProductType = z.infer<typeof productSchema>;
export const useAddProduct = () => {
  const { ref, present, dismiss } = useModal();
  const { control, handleSubmit, reset } = useCustomForm(productSchema, {
    visibility: false,
  });

  const { mutate } = useCreateProductApi();

  const onSubmit = (dataProduct: ProductType) => {
    mutate(dataProduct, {
      onSuccess: () => {
        showSuccesMessage(translate('catalogue.createProduct.success'));
      },
      onError: () => {
        showErrorMessage(translate('catalogue.createProduct.echec'));
      },
    });
    dismiss();
  };

  return {
    modalControl: control,
    handleSubmit,
    reset,
    ref,
    present,
    dismiss,
    onSubmit,
    mutate,
    isError,
  };
};
