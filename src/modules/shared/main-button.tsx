import clsx from 'clsx';
import React from 'react';
import type { GestureResponderEvent } from 'react-native';

import { Button } from '@/shared/components';

interface MainButtonProps {
  onPressHandler?: (event?: GestureResponderEvent) => void;
  label: string;
  width?: string;
  height?: string;
  radius?: string;
  shadow?: string;
  alternativeBg?: string;
  textPosition?: string;
  type?: 'pill' | 'button';
  alternativeStyle?: string;
  icon?: React.ReactNode;
  iconClassName?: string;
  backgroundColor?: string;
}

export default function MainButton({
  onPressHandler,
  icon,
  label,
  type = 'button',
  textPosition = 'text-center',
  width = `w-full`,
  height = `h-12`,
  radius = 'rounded-md',
  shadow,
  alternativeStyle,
  iconClassName,

  alternativeBg,
}: MainButtonProps) {
  return (
    <Button
      onPress={onPressHandler}
      label={label}
      type={type}
      className={clsx(height, width, radius, 'flex', shadow, alternativeStyle)}
      textClassName={clsx(
        'flex w-11/12 font-lato text-xs font-bold md:text-lg',
        textPosition
      )}
      icon={icon}
      iconClassName={iconClassName}
      alternativeBg={alternativeBg}
    />
  );
}
