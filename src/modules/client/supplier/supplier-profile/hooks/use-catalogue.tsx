import { useCustomForm } from '@/core';

import { collectionIdSchema } from '../schema/collection-schema';

export const useCatalogue = () => {
  const { control } = useCustomForm(collectionIdSchema, {
    collection: 35,
  });
  return {
    control,
  };
};
