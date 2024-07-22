import React, { useState } from 'react';
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
import { Image } from './image';
import { Text } from './text';

type CounterProps<T extends FieldValues> = {
  title?: string;
  image?: string;
  className?: string;
  svgComponent?: React.ComponentType;
  id: number;
  name: Path<T>;
  control: Control<T>;
  rules?: RegisterOptions;
};

export const Counter = <T extends FieldValues>({
  title,
  image,
  svgComponent: SvgComponent,
  className,
  id,
  name,
  control,
  rules,
}: CounterProps<T>) => {
  const { field } = useController({ control, name, rules });
  const initialValue =
    field.value?.find((item: any) => Object.keys(item)[0] === String(id))?.[
      id
    ] ?? 0;
  const [count, setCount] = useState<number>(initialValue);
  console.log('dd');
  const updateArray = (arr: any[], id: number, newCount: number) => {
    if (newCount === 0) {
      return arr.filter((item) => item[id] === undefined);
    } else {
      const index = arr.findIndex((item) => item[id] !== undefined);
      if (index !== -1) {
        arr[index] = { [id]: newCount };
      } else {
        arr.push({ [id]: newCount });
      }
      return [...arr];
    }
  };
  const handleAdd = () => {
    const updatedValue = updateArray(field.value, id, count + 1);
    field.onChange(updatedValue);
    setCount((prev) => prev + 1);
  };
  const handleMin = () => {
    if (count > 0) {
      const updatedValue = updateArray(field.value, id, count - 1);
      field.onChange(updatedValue);
      setCount((prev) => prev - 1);
    }
  };

  return (
    <View
      className={`${className}flex h-16 w-full flex-row justify-between rounded-lg border border-description px-4 dark:border-white`}
    >
      <View className="flex flex-row items-center gap-4">
        {SvgComponent && (
          <View>
            <SvgComponent />
          </View>
        )}
        {image && (
          <Image
            className="h-1/3 w-1/3 overflow-hidden rounded-2xl"
            source={{ uri: image }}
          />
        )}
        <Text className="text-xs font-bold">{title}</Text>
      </View>
      <View className="flex flex-row items-center">
        <Button
          icon={<Minus />}
          className="h-10 w-10 rounded"
          onPressHandler={handleMin}
        />
        <Text className="w-8 text-center text-xs font-medium">{count}</Text>
        <Button
          icon={<Plus />}
          className="h-10 w-10 rounded "
          onPressHandler={handleAdd}
        />
      </View>
    </View>
  );
};
