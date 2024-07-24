import clsx from 'clsx';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

interface TagProps {
  label: string;
  selected: boolean;
  onSelect: (label: string) => void;
}

export const Tag: React.FC<TagProps> = ({ label, selected, onSelect }) => {
  const handlePress = () => {
    onSelect(label);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      className={clsx(
        'm-1 rounded-full px-4 py-2',
        selected ? 'bg-blue-500' : 'bg-gray-200'
      )}
    >
      <Text
        className={clsx('text-center', selected ? 'text-white' : 'text-black')}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};
