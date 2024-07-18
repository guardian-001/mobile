import * as React from 'react';
import {
  type Control,
  type FieldValues,
  type Path,
  type RegisterOptions,
  useController,
} from 'react-hook-form';

import { Image, Pressable, Text, View } from './';

type CardProps<T extends FieldValues> = {
  title?: string;
  image?: string;
  className?: string;
  classNameText?: string;
  svgComponent?: React.ComponentType;
  name: Path<T>;
  id: number;
  control: Control<T>;
  rules?: RegisterOptions;
  selectedValue: number;
  onSelect: () => void;
};

export const ToggleCard = <T extends FieldValues>({
  title,
  image,
  className,
  classNameText,
  svgComponent: SvgComponent,
  name,
  id,
  selectedValue,
  control,
  rules,
  onSelect,
  ...props
}: CardProps<T>) => {
  const { field, fieldState } = useController({ control, name, rules });

  const handlePress = () => {
    onSelect();
    field.onChange(id);
  };

  return (
    <>
      <Pressable
        onPress={handlePress}
        className={`${className} flex-1 items-center justify-center self-center   p-4 ${
          selectedValue === id
            ? 'border-2 border-primary '
            : 'border-borderColor border-[0.5px]'
        } mb-7`}
        {...props}
      >
        {SvgComponent ? (
          <View className="flex h-28 w-32  items-center justify-center ">
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
      {fieldState.error?.message && (
        <Text className="text-danger-400 dark:text-danger-600 text-sm">
          {fieldState.error?.message}
        </Text>
      )}
    </>
  );
};
