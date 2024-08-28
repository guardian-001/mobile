import React from 'react';
import type {
  Control,
  FieldValues,
  Path,
  RegisterOptions,
} from 'react-hook-form';
import { useController } from 'react-hook-form';
import { Text, TouchableOpacity } from 'react-native';

import { Image } from './image';
interface TagProps<T extends FieldValues> {
  label: string;
  id?: number;
  name: Path<T>;
  control: Control<T>;
  rules?: RegisterOptions;
  multi?: boolean;
  imageIcon?: string;
  className?: string;
  obligation?: boolean;
  idValidation?: boolean;
}

export const Tag = <T extends FieldValues>({
  id,
  label,
  name,
  control,
  rules,
  multi = false,
  imageIcon,
  obligation = false,
  className,
  idValidation = false,
}: TagProps<T>) => {
  const { field } = useController({ name, control, rules });

  const handlePress = () => {
    if (!idValidation) {
      if (field.value === label && !obligation) field.onChange('');
      else field.onChange(label);
    } else {
      if (field.value === id && !obligation) field.onChange('');
      else field.onChange(id);
    }
  };
  const handleChangeMulti = () => {
    if (field.value.includes(id)) {
      field.onChange(
        field.value.filter((tagSelected: number) => tagSelected !== id)
      );
    } else {
      field.onChange([...field.value, id]);
    }
  };

  const isSelected = multi
    ? field.value.includes(id)
    : idValidation
    ? field.value === id
    : field.value === label;

  return (
    <TouchableOpacity
      onPress={multi ? handleChangeMulti : handlePress}
      className={`${className} m-1 min-w-min rounded-full border border-color-border p-3
        ${isSelected ? 'bg-primary' : 'bg-white'}`}
    >
      {imageIcon && (
        <Image
          className="mr-2 h-full w-10 overflow-hidden"
          source={{ uri: imageIcon }}
          contentFit="contain"
        />
      )}
      <Text
        className={`text-center ${
          isSelected ? 'text-white' : 'text-primary-txt'
        }`}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};
