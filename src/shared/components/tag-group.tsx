import React, { useState } from 'react';
import type {
  Control,
  FieldValues,
  Path,
  RegisterOptions,
} from 'react-hook-form';
import { View } from 'react-native';

import { translate, type TxKeyPath } from '@/core';
import type { TagType } from '@/types';

import { Tag } from './tag';
import { Text } from './text';

interface TagGroupProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  tags: TagType[];
  rules?: RegisterOptions;
  label?: TxKeyPath;
  error?: TxKeyPath;
  multi?: boolean;
  required?: boolean;
  sliced?: boolean;
}

export const TagGroup = <T extends FieldValues>({
  name,
  control,
  tags,
  rules,
  label,
  error,
  sliced = true,
  required = false,
  multi = false,
}: TagGroupProps<T>) => {
  const [visibleItems, setVisibleItems] = useState(8);
  const loadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 6);
  };

  return (
    <View className="mt-5 w-full">
      {sliced ? (
        <>
          <View className="flex w-full flex-row justify-start">
            <Text tx={label} className="mb-2 text-base font-bold" />
            {required && <Text className="text-primary">*</Text>}
          </View>

          <View className="flex flex-row flex-wrap">
            {tags.slice(0, visibleItems).map((tag) => (
              <Tag
                key={tag.value}
                label={tag.displayName}
                name={name}
                control={control}
                rules={rules}
                multi={multi}
              />
            ))}
          </View>
          {visibleItems < tags.length && (
            <Text className="mt-2 text-primary underline" onPress={loadMore}>
              {translate('labels.showMore')}
            </Text>
          )}
        </>
      ) : (
        <View className="flex flex-row flex-wrap gap-y-2">
          {tags.map((tag, index) => (
            <Tag
              id={tag.id}
              key={index}
              label={tag.displayName}
              name={name}
              control={control}
              rules={rules}
              multi={multi}
              className="flex h-12 max-w-xs flex-row items-center justify-evenly"
              imageIcon={tag.imageIcon}
            />
          ))}
        </View>
      )}
      {error && <Text className="text-xs text-error " tx={error} />}
    </View>
  );
};
