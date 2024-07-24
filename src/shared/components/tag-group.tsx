import React, { useState } from 'react';
import type {
  Control,
  FieldValues,
  Path,
  RegisterOptions,
} from 'react-hook-form';
import { useController } from 'react-hook-form';
import { View } from 'react-native';

import type { TxKeyPath } from '@/core';

import { Tag } from './tag';
import { Text } from './text';

interface TagGroupProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  tags: string[];
  rules?: RegisterOptions;
  label: TxKeyPath;
}

export const TagGroup = <T extends FieldValues>({
  name,
  control,
  tags,
  rules,
  label,
}: TagGroupProps<T>) => {
  const { field, fieldState } = useController({
    name,
    control,
    rules,
  });
  const [visibleItems, setVisibleItems] = useState(8);
  const loadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 6);
  };

  const handleTagSelect = (selectedTag: string) => {
    if (field.value === selectedTag) field.onChange('');
    else field.onChange(selectedTag);
  };
  const error = fieldState.error?.message as TxKeyPath | undefined;

  return (
    <View className="w-full">
      <Text tx={label} className="mb-1 text-base font-bold" />
      <View className="flex flex-row flex-wrap">
        {tags.slice(0, visibleItems).map((tag) => (
          <Tag
            key={tag}
            label={tag}
            selected={field.value === tag}
            onSelect={handleTagSelect}
          />
        ))}
      </View>
      {error && (
        <Text className="text-xs text-error dark:text-error" tx={error} />
      )}
      {visibleItems < tags.length && (
        <Text className="mt-2 text-primary underline" onPress={loadMore}>
          Afficher plus
        </Text>
      )}
    </View>
  );
};
