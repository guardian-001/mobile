import * as React from 'react';
import type {
  Control,
  FieldValues,
  Path,
  RegisterOptions,
} from 'react-hook-form';
import { useController } from 'react-hook-form';
import { Pressable } from 'react-native';

import { Image } from './image';
import { Text } from './text';

type CardProps<T extends FieldValues> = {
  title?: string;
  image?: string;
  className?: string;
  classNameText?: string;
  svgComponent?: React.ComponentType;
  name: Path<T>;
  control: Control<T>;
  rules?: RegisterOptions; // Adjust the type according to your validation rules
};

export const ToggleCard = <T extends FieldValues>({
  title,
  image,
  className,
  classNameText,
  svgComponent: SvgComponent,
  name,
  control,
  rules,
  ...props
}: CardProps<T>) => {
  const { field, fieldState } = useController({ control, name, rules });

  const handlePress = () => {
    field.onChange(!field.value);
  };
  return (
    <>
      <Pressable
        onPress={handlePress}
        className={`${className}  flex-1 items-center justify-center self-center border-[0.5px] p-4 ${
          field.value ? `border-primary` : 'border-borderColor'
        } mb-7`}
        {...props}
      >
        {SvgComponent ? (
          <SvgComponent />
        ) : (
          <Image
            className="h-1/2 w-1/2 overflow-hidden rounded-2xl"
            source={{
              uri: image,
            }}
          />
        )}
        <Text className={`${classNameText} text-center `}>{title}</Text>
      </Pressable>
      {fieldState.error?.message && (
        <Text className="text-danger-400 dark:text-danger-600 text-sm">
          {fieldState.error?.message}
        </Text>
      )}
    </>
  );
};
