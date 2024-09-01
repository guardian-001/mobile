import { useMemo } from 'react';

import { useCustomForm } from '@/core';
import { SearchSchema } from '@/shared/validations';

import type { Product } from '../../profile/type';

export const useProductManagement = (items: Product[]) => {
  const { handleSubmit, control, watch } = useCustomForm(SearchSchema);

  const searchValue = watch('search');

  const filteredItems = useMemo(() => {
    if (!searchValue) return items;
    return items.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [searchValue, items]);

  return {
    handleSubmit,
    control,
    watch,
    filteredItems,
  };
};
