import { isError } from 'lodash';

import { useCreateProductApi } from '@/api/supplier/catalogue/use-create-product';
import { translate, useCustomForm } from '@/core';
import {
  showErrorMessage,
  showSuccesMessage,
  useModal,
} from '@/shared/components';

import {
  createProductSchema,
  productImageCreationSchema,
} from '../schema/collection-schema';
import type { createProductType, ImagesCreatePRoductFormType } from '../types';
import { useImagePicker } from './use-image-picker';

export const useAddProduct = () => {
  const { ref, present, dismiss } = useModal();
  const {
    control: modalControl,
    handleSubmit,
    reset,
  } = useCustomForm(createProductSchema, {
    visibility: false,
  });

  const { errors: imagesError, control: ImageControl } = useCustomForm(
    productImageCreationSchema,
    {
      productImages: [],
    }
  );
  const {
    images,
    selectedImage,
    error,
    pickImages,
    removeImage,
    handleImagePress,
  } = useImagePicker<ImagesCreatePRoductFormType>({
    control: ImageControl,
    name: 'productImages',
  });
  const { mutate } = useCreateProductApi();

  const onSubmit = (dataProduct: createProductType) => {
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
    images,
    selectedImage,
    error,
    pickImages,
    removeImage,
    handleImagePress,
    modalControl,
    handleSubmit,
    reset,
    ref,
    present,
    dismiss,
    onSubmit,
    mutate,
    isError,
    imagesError,
  };
};
