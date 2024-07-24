import React from 'react';
import type {
  Control,
  FieldValues,
  Path,
  RegisterOptions,
} from 'react-hook-form';
import { useController } from 'react-hook-form';
import { View } from 'react-native';

import { Tag } from './tag';

interface TagGroupProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  tags: string[];
  rules?: RegisterOptions;
}

export const TagGroup = <T extends FieldValues>({
  name,
  control,
  tags,
  rules,
}: TagGroupProps<T>) => {
  const { field } = useController({
    name,
    control,
    rules,
  });

  const handleTagSelect = (selectedTag: string) => {
    const newValue = field.value.includes(selectedTag)
      ? field.value.filter((tag: string) => tag !== selectedTag)
      : [...field.value, selectedTag];

    field.onChange(newValue);
  };

  return (
    <View className="flex flex-wrap">
      {tags.map((tag) => (
        <Tag
          key={tag}
          label={tag}
          selected={field.value.includes(tag)}
          onSelect={handleTagSelect}
        />
      ))}
    </View>
  );
};
