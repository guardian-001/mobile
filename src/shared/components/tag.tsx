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
        'm-1 min-w-[22%] rounded-full border border-color-border px-4 py-3',
        selected ? 'bg-primary' : 'bg-white'
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
