import { Env } from '@env';
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
  value: number;
  control: Control<T>;
  rules?: RegisterOptions;
};

export const ToggleCard = <T extends FieldValues>({
  title,
  image,
  className,
  classNameText,
  svgComponent: SvgComponent,
  name,
  value,
  control,
  rules,
  ...props
}: CardProps<T>) => {
  const { field } = useController({ control, name, rules });
  const handlePress = () => {
    field.onChange(value);
  };

  return (
    <>
      <Pressable
        onPress={handlePress}
        className={`${className} flex-1 items-center justify-center  self-center   p-4 ${
          field.value === value
            ? 'border-2 border-primary '
            : 'border-borderColor border'
        } `}
        {...props}
      >
        {SvgComponent ? (
          <View className="flex h-28 w-28  items-center justify-center ">
            <SvgComponent />
          </View>
        ) : (
          <Image
            className="h-2/3 w-4/6 overflow-hidden rounded-2xl"
            source={{ uri: `${Env.API_URL}${image}` }}
          />
        )}
        <Text className={`${classNameText} text-center text-xs font-bold`}>
          {title}
        </Text>
      </Pressable>
    </>
  );
};
