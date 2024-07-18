import * as React from 'react';
import {
  type Control,
  type FieldValues,
  type Path,
  type RegisterOptions,
  useController,
} from 'react-hook-form';

import type { TxKeyPath } from '@/core';

import { Image, Pressable, Text, View } from './';

type CardProps<T extends FieldValues> = {
  title?: string;
  image?: string;
  className?: string;
  classNameText?: string;
  containerClassName?: string;
  svgComponent?: React.ComponentType;
  name: Path<T>;
  control: Control<T>;
  rules?: RegisterOptions;
  value: string;
  selectedValue: string | string[];
  onSelect: () => void;
  multi?: boolean;
};

export const ToggleCard = <T extends FieldValues>({
  title,
  image,
  className,
  classNameText,
  containerClassName,
  svgComponent: SvgComponent,
  name,
  value,
  selectedValue,
  control,
  rules,
  onSelect,
  multi = false,
  ...props
}: CardProps<T>) => {
  const { field, fieldState } = useController({ control, name, rules });

  const handleChange = () => {
    onSelect();
    field.onChange(value);
  };

  const handleChangeMulti = () => {
    onSelect();
    if (field.value.includes(value)) {
      field.onChange(field.value.filter((item: string) => item !== value));
    } else {
      field.onChange([...field.value, value]);
    }
  };

  const error = fieldState.error?.message as TxKeyPath | undefined;
  const isSelected = multi
    ? selectedValue.includes(value)
    : selectedValue === value;
  console.log('tog', field.value, selectedValue, value);
  return (
    <View className={`${containerClassName} flex-1`}>
      <Pressable
        onPress={multi ? handleChangeMulti : handleChange}
        className={`${className} flex-1 items-center justify-center p-4 ${
          isSelected
            ? 'border-2 border-primary '
            : 'border-borderColor border-[0.5px]'
        }`}
        {...props}
      >
        {SvgComponent ? (
          <View className="flex h-28 w-28  items-center justify-center ">
            <SvgComponent />
          </View>
        ) : (
          <Image
            className="h-1/3 w-1/3 overflow-hidden rounded-2xl"
            source={{ uri: image }}
          />
        )}
        <Text className={`${classNameText} text-center text-xs font-bold`}>
          {title}
        </Text>
      </Pressable>
      {error && (
        <Text
          className="text-danger-400 dark:text-danger-600 text-sm"
          tx={error}
        />
      )}
    </View>
  );
};
