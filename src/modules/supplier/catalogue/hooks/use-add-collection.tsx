import type * as z from 'zod';

import { useCreateCollectionApi } from '@/api/supplier/catalogue/use-create-collection';
import { useGetCollectionsCategoriesApi } from '@/api/supplier/catalogue/use-get-categories';
import { translate, useCustomForm } from '@/core';
import {
  showErrorMessage,
  showSuccesMessage,
  useModal,
} from '@/shared/components';

import { collectionSchema } from '../../profile/schemas/collection-schema';
import { useProfileCatalogue } from './use-profile-catalogue';

type CollectionType = z.infer<typeof collectionSchema>;
export const useAddCollection = () => {
  const { refetch } = useProfileCatalogue();
  const { ref, present, dismiss } = useModal();
  const { control, handleSubmit, reset } = useCustomForm(collectionSchema, {
    visibility: false,
  });
  const { data, isPending, isError, isSuccess } =
    useGetCollectionsCategoriesApi();

  const { mutate } = useCreateCollectionApi();

  const categoriesOptions = data?.map((category) => ({
    icon: category.icon,
    label: category.label,
    value: category.id,
  }));

  const onSubmit = (dataCollection: CollectionType) => {
    mutate(dataCollection, {
      onSuccess: () => {
        showSuccesMessage(translate('catalogue.createCollection.success'));
        reset();
        refetch();
      },
      onError: () => {
        showErrorMessage(translate('catalogue.createCollection.echec'));
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
    categoriesOptions,
    data,
    isPending,
    isError,
    isSuccess,
  };
};
