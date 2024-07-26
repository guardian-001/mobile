import React, { useState } from 'react';
import type {
  Control,
  FieldValues,
  Path,
  RegisterOptions,
} from 'react-hook-form';
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
  error?: TxKeyPath;
  multi?: boolean;
  required?: boolean;
}

export const TagGroup = <T extends FieldValues>({
  name,
  control,
  tags,
  rules,
  label,
  error,
  required = false,
  multi = false,
}: TagGroupProps<T>) => {
  const [visibleItems, setVisibleItems] = useState(8);
  const loadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 6);
  };

  return (
    <View className="w-full">
      <View className="flex w-full flex-row justify-start">
        <Text tx={label} className="mb-1 text-base font-bold" />
        {required && <Text className="text-primary">*</Text>}
      </View>
      <View className="flex flex-row flex-wrap">
        {tags.slice(0, visibleItems).map((tag) => (
          <Tag
            key={tag}
            label={tag}
            name={name}
            control={control}
            rules={rules}
            multi={multi}
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
