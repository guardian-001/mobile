import React from 'react';
import {
  type Control,
  type FieldValues,
  type Path,
  type RegisterOptions,
  useController,
} from 'react-hook-form';
import { View } from 'react-native';

import { Minus, Plus } from '@/assets/icons';

import { Button } from './button';
import { Text } from './text';

type CounterProps<T extends FieldValues> = {
  title?: string;
  className?: string;
  name: Path<T>;
  control: Control<T>;
  rules?: RegisterOptions;
};

export const CounterSimple = <T extends FieldValues>({
  title,
  className,
  name,
  control,
  rules,
}: CounterProps<T>) => {
  const { field } = useController({ control, name, rules });

  const handleAdd = () => {
    if (field.value < 100) {
      field.onChange(field.value + 1);
    }
  };
  const handleMin = () => {
    if (field.value > 0) {
      field.onChange(field.value - 1);
    }
  };

  return (
    <View
      className={`${className}flex w-11/12 flex-row items-center justify-between`}
    >
      <Text className="text-base font-bold">{title}</Text>
      <View className="flex flex-row items-center">
        <Button
          icon={<Minus />}
          className="h-10 w-10 rounded bg-sky-blue"
          onPressHandler={handleMin}
        />
        <Text className="w-8 text-center text-xs font-medium">
          {field.value}
        </Text>
        <Button
          icon={<Plus />}
          className="h-10 w-10 rounded bg-sky-blue"
          onPressHandler={handleAdd}
        />
      </View>
    </View>
  );
};
