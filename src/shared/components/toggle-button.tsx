import * as React from 'react';
import {
  type Control,
  type FieldValues,
  type Path,
  type RegisterOptions,
  useController,
} from 'react-hook-form';
import { Pressable, type ViewStyle } from 'react-native';

import { Text } from './text';

type CardProps<T extends FieldValues> = {
  value: string;
  name: Path<T>;
  control: Control<T>;
  rules?: RegisterOptions;
  selectedValue: string;
  onSelect: () => void;
  style?: ViewStyle;
};

export const ToggleButton = <T extends FieldValues>({
  value,
  name,
  control,
  rules,
  selectedValue,
  onSelect,
  style,
  ...props
}: CardProps<T>) => {
  const { field } = useController({ control, name, rules });

  const handlePress = () => {
    onSelect();
    field.onChange(value);
  };

  return (
    <Pressable
      onPress={handlePress}
      style={style}
      className={`m-1 rounded-md px-4 py-2 ${
        selectedValue === value
          ? 'bg-primary'
          : 'border border-dashed border-gray-300 bg-white text-gray-500'
      }  `}
      {...props}
    >
      <Text
        className={`text-xs ${
          selectedValue === value ? 'font-semibold text-white' : 'text-gray-500'
        }  `}
      >
        {value}
      </Text>
    </Pressable>
  );
};
