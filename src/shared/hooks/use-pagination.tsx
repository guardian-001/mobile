import { useState } from 'react';

type UsePaginationResult<T> = {
  currentPage: number;
  totalPages: number;
  handlePageChange: (pageIndex: number) => void;
  paginatedItems: (items: T[]) => string[];
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

  const paginatedItems = (items: T[]) => {
    const result: string[] = [];
    const chunkSize: number = 8;
    items.forEach((_, i) => {
      if (i % chunkSize === 0) {
        result.push(JSON.stringify(items.slice(i, i + chunkSize)));
      }
    });
    return result;
  };
  return {
    currentPage,
    totalPages,
    handlePageChange,
    paginatedItems,
  };
};
