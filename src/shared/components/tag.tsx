import React from 'react';
import type {
  Control,
  FieldValues,
  Path,
  RegisterOptions,
} from 'react-hook-form';
import { useController } from 'react-hook-form';
import { Text, TouchableOpacity } from 'react-native';
interface TagProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  control: Control<T>;
  rules?: RegisterOptions;
  multi?: boolean;
}

export const Tag = <T extends FieldValues>({
  label,
  name,
  control,
  rules,
  multi = false,
}: TagProps<T>) => {
  const { field } = useController({ name, control, rules });

  const handlePress = () => {
    if (field.value === label) field.onChange('');
    else field.onChange(label);
  };
  const handleChangeMulti = () => {
    if (field.value.includes(label)) {
      field.onChange(
        field.value.filter((tagSelected: string) => tagSelected !== label)
      );
    } else {
      field.onChange([...field.value, label]);
    }
  };
  const isSelected = multi
    ? field.value.includes(label)
    : field.value === label;

  return (
    <TouchableOpacity
      onPress={multi ? handleChangeMulti : handlePress}
      className={`m-1 min-w-[22%] rounded-full border border-color-border px-4 py-3
        ${isSelected ? 'bg-primary' : 'bg-white'}`}
    >
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
