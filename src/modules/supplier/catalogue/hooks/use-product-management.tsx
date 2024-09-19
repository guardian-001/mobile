import React, { useMemo, useState } from 'react';

import { useCustomForm } from '@/core';
import { SearchSchema } from '@/shared/validations';

import type { Product } from '../types';

export const useProductManagement = (items: Product[]) => {
  const { handleSubmit, control, watch } = useCustomForm(SearchSchema);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [listState, setListState] = useState<boolean>(true);

  const searchValue = watch('search');

  const filteredItems = useMemo(() => {
    if (!searchValue) return items;
    return items.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [searchValue, items]);

  React.useEffect(() => {
    if (searchValue) {
      setSelectedValue(null);
    }
  }, [searchValue]);

  const handleSelectItem = (itemName: string) => {
    setSelectedValue(itemName);
  };

  return {
    handleSubmit,
    control,
    filteredItems,
    selectedValue,
    setSelectedValue,
    searchValue,
    handleSelectItem,
    listState,
    setListState,
  };
};
