// usePagination.ts
import { useState } from 'react';

type UsePaginationResult<T> = {
  currentPage: number;
  totalPages: number;
  handlePageChange: (pageIndex: number) => void;
  paginatedItems: (items: T[]) => T[];
};

export const usePagination = <T,>(
  totalItems: number,
  itemsPerPage: number
): UsePaginationResult<T> => {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };

  const paginatedItems = (items: T[]) =>
    items.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  return {
    currentPage,
    totalPages,
    handlePageChange,
    paginatedItems,
  };
};
