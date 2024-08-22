import * as React from 'react';
import { View } from 'react-native';

import { ArrowRightLong } from '@/assets/icons/long-arrow-right';

import { Button } from './button';
import { Image } from './image';
import { Text } from './text';

type CardProps = {
  label?: string;
  imageIcon?: string;
  className?: string;
  classNameText?: string;
};

export const Card = ({
  label,
  imageIcon,
  className,
  classNameText,
  ...props
}: CardProps) => {
  return (
    <View className={`${className} h-52 w-60 gap-2`} {...props}>
      <Image
        className="h-[70%] w-full overflow-hidden rounded-lg"
        source={require('@/assets/images/house-image.jpeg')}
      />
      <View className="flex flex-1 flex-row items-center">
        <View className="flex h-full flex-1 flex-row items-center">
          {imageIcon && (
            <Image
              className="h-4/6 w-1/6 overflow-hidden"
              source={{ uri: imageIcon }}
              contentFit="contain"
            />
          )}
          <Text
            className={`${classNameText} ${
              imageIcon && 'ml-2 flex-1'
            }  max-w-[85%] text-xs font-semibold`}
          >
            {label}
          </Text>
        </View>
        <Button
          icon={<ArrowRightLong />}
          onPress={() => {}}
          className="!my-0 h-7 w-7 rounded-full !bg-light-blue !px-0"
        />
      </View>
    </View>
  );
};
