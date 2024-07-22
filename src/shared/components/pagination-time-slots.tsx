import React from 'react';
import { TouchableOpacity, View } from 'react-native';

type RenderPaginationProps = {
  totalPages: number;
  currentPage: number;
  handlePageChange: (pageIndex: number) => void;
};

export const RenderPagination = ({
  totalPages,
  currentPage,
  handlePageChange,
}: RenderPaginationProps) => {
  return (
    <View className="mt-4 flex-row justify-center">
      {Array.from({ length: totalPages }).map((_, pageIndex) => (
        <TouchableOpacity
          key={pageIndex}
          className={`mx-1 h-2 w-2 rounded-full ${
            pageIndex === currentPage ? 'bg-gray-800' : 'bg-gray-300'
          }`}
          onPress={() => handlePageChange(pageIndex)}
        />
      ))}
    </View>
  );
};
