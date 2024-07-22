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
  containerClassName?: string;
  svgComponent?: React.ComponentType;
  name: Path<T>;
  value: number;
  control: Control<T>;
  rules?: RegisterOptions;
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
  control,
  rules,
  multi = false,
  ...props
}: CardProps<T>) => {
  const { field } = useController({ control, name, rules });

  const handlePress = () => {
    field.onChange(value);
  };

  const handleChangeMulti = () => {
    if (field.value.includes(value)) {
      field.onChange(field.value.filter((item: number) => item !== value));
    } else {
      field.onChange([...field.value, value]);
    }
  };
  const isSelected = multi
    ? field.value.includes(value)
    : field.value === value;
  return (
    <View className={`${containerClassName} flex-1`}>
      <Pressable
        onPress={multi ? handleChangeMulti : handlePress}
        className={`${className} flex-1 items-center justify-center self-center   p-4 ${
          isSelected ? 'border-2 border-primary ' : 'border border-color-border'
        } `}
        {...props}
      >
        {SvgComponent && (
          <View className="flex h-28 w-28  items-center justify-center">
            <SvgComponent />
          </View>
        )}
        {image && (
          <Image
            className="h-1/3 w-1/3 overflow-hidden rounded-2xl"
            source={{ uri: image }}
          />
        )}
        <Text className={`${classNameText} text-center text-xs font-bold`}>
          {title}
        </Text>
      </Pressable>
    </View>
  );
};
