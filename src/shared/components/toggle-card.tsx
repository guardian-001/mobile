import * as React from 'react';
import {
  type Control,
  type FieldValues,
  type Path,
  type RegisterOptions,
  useController,
} from 'react-hook-form';

import useImageUrl from '../hooks/use-image-url';
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
  description?: string;
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
  description,
  ...props
}: CardProps<T>) => {
  const { field } = useController({ control, name, rules });
  const handlePress = () => {
    field.onChange(value);
  };

  const imageUrl = useImageUrl(image);

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
            className="h-2/3 w-4/6 overflow-hidden rounded-2xl"
            source={{ uri: imageUrl }}
          />
        )}
        <Text className={`${classNameText} text-center text-xs font-bold`}>
          {title}
        </Text>
        {description && (
          <Text className={`text-[10px] font-normal text-description`}>
            {description}
          </Text>
        )}
      </Pressable>
    </View>
  );
};
