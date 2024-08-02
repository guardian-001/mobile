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

import { useCounterUtils } from '../hooks';
import useImageUrl from '../hooks/use-image-url';
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
  const { findValue, updateArray } = useCounterUtils();
  const { field } = useController({ control, name, rules });
  const value = findValue(field.value, id);
  const imageUrl = useImageUrl(image);

  const handleAdd = () => {
    if (value < 100) {
      const updatedValue = updateArray(field.value, id, value + 1);
      field.onChange(updatedValue);
    }
  };
  const handleMin = () => {
    if (value > 0) {
      const updatedValue = updateArray(field.value, id, value - 1);
      field.onChange(updatedValue);
    }
  };

  return (
    <View
      className={`${className}flex h-16 w-full flex-row justify-between rounded-lg border border-description px-4 `}
    >
      <View className="flex flex-row items-center gap-4">
        {SvgComponent && (
          <View>
            <SvgComponent />
          </View>
        )}
        {image && (
          <Image
            className="h-10 w-10 overflow-hidden object-cover "
            source={{ uri: imageUrl }}
            contentFit="cover"
          />
        )}
        <Text className="text-xs font-bold">{title}</Text>
      </View>
      <View className="flex flex-row items-center">
        <Button
          icon={<Minus />}
          className="h-10 w-10 rounded bg-sky-blue"
          onPressHandler={handleMin}
        />
        <Text className="w-8 text-center text-xs font-medium">{value}</Text>
        <Button
          icon={<Plus />}
          className="h-10 w-10 rounded bg-sky-blue"
          onPressHandler={handleAdd}
        />
      </View>
    </View>
  );
};
