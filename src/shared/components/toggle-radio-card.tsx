import * as React from 'react';
import {
  type Control,
  type FieldValues,
  type Path,
  type RegisterOptions,
  useController,
} from 'react-hook-form';

import { Pressable, Radio, Text, View } from './';

type CardProps<T extends FieldValues> = {
  title?: string;
  className?: string;
  classNameText?: string;
  containerClassName?: string;
  svgComponent?: React.ComponentType;
  svgComponentBorder?: React.ComponentType;
  name: Path<T>;
  value?: string;
  control: Control<T>;
  rules?: RegisterOptions;
  multi?: boolean;
  checkbox?: boolean;
  description?: string;
};

export const ToggleRadioCard = <T extends FieldValues>({
  title,
  className,
  containerClassName,
  svgComponent: SvgComponent,
  svgComponentBorder: SvgComponentBorder,
  name,
  value,
  control,
  rules,
  description,
  ...props
}: CardProps<T>) => {
  const { field } = useController({ control, name, rules });
  const handlePress = () => {
    field.onChange(value);
  };

  const isSelected = field.value === value;
  return (
    <View className={`${containerClassName} `}>
      <Pressable
        onPress={handlePress}
        className={`${className} flex  
           items-center justify-center self-center  `}
        {...props}
      >
        {SvgComponent && SvgComponentBorder && (
          <View className="-mb-3">
            {isSelected ? <SvgComponentBorder /> : <SvgComponent />}
          </View>
        )}

        <Radio
          accessibilityLabel=""
          label={title}
          onChange={handlePress}
          checked={isSelected}
        />
      </Pressable>
      <View className={`px-10`}>
        <Text className={`  text-center text-xs font-normal text-description`}>
          {description}
        </Text>
      </View>
    </View>
  );
};
