import * as React from 'react';
import {
  type Control,
  type FieldValues,
  type Path,
  type RegisterOptions,
  useController,
} from 'react-hook-form';
import { Pressable, View } from 'react-native';

import { Checkbox } from './checkbox';
import { Image } from './image';
import { Text } from './text';

type CardProps<T extends FieldValues> = {
  title?: string;
  image?: string;
  imageIcon?: string;
  className?: string;
  classNameText?: string;
  containerClassName?: string;
  svgComponent?: React.ComponentType;
  name: Path<T>;
  value?: number;
  control: Control<T>;
  rules?: RegisterOptions;
  multi?: boolean;
  checkbox?: boolean;
  description?: string;
};

export const ToggleCard = <T extends FieldValues>({
  title,
  image,
  imageIcon,
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
  checkbox,
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
        className={`${className} flex ${
          checkbox ? 'flex-row' : ''
        } items-center justify-center self-center   p-2 ${
          isSelected ? 'border-2 border-primary ' : 'border border-color-border'
        } `}
        {...props}
      >
        {checkbox && (
          <Checkbox
            checked={isSelected}
            onChange={() => {}}
            accessibilityLabel=""
            complex={true}
          />
        )}
        {SvgComponent && (
          <View className="flex h-28 w-28  items-center justify-center">
            <SvgComponent />
          </View>
        )}
        {image && (
          <Image
            className="flex-2 mt-2 h-3/5 w-2/5 overflow-hidden"
            source={{ uri: image }}
            contentFit="contain"
          />
        )}
        {imageIcon && (
          <Image
            className="mr-5 h-full w-1/12   overflow-hidden"
            source={{ uri: imageIcon }}
            contentFit="contain"
          />
        )}
        <Text
          className={`${classNameText} ${imageIcon && 'flex-1'} ${
            checkbox && 'w-full'
          } max-w-[85%] text-xs font-bold`}
        >
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
