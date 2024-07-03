import React from 'react';
import type { GestureResponderEvent } from 'react-native';

import { Button } from '@/shared/components';

interface MainButtonProps {
  onPressHandler?: (event: GestureResponderEvent) => void;
  label: string;
  width?: string;
  height?: string;
  radius?: string;
  shadow?: string;
  textPosition?: string;
  type?: 'pill' | 'button';
  alternativeStyle?: string;
  icon?: React.ReactNode; // Add the icon property here
}

export default function MainButton({
  onPressHandler,
  icon,
  label,
  type = 'pill',
  textPosition = 'text-center',
  width = `w-full`,
  height = `h-12`,
  radius = 'rounded-md',
  shadow,
  alternativeStyle,
}: MainButtonProps) {
  return (
    <Button
      onPress={onPressHandler}
      label={label}
      type={type}
      className={`${height} ${width} ${radius} flex  ${shadow} ${alternativeStyle}`}
      textClassName={`font-lato font-bold text-xs w-11/12 flex  ${textPosition}`}
      icon={icon} // Pass the icon prop to Button
    />
  );
}
