import clsx from 'clsx';
import React from 'react';
import type { GestureResponderEvent } from 'react-native';

import { Button } from '@/shared/components';

interface StepperButtonProps {
  onPressHandler?: (event: GestureResponderEvent) => void;
  label: string;
  width?: string;
  height?: string;
  radius?: string;
  shadow?: string;
  textPosition?: string;
  alternativeBg?: string;
  alternativeTextStyle?: string;
  type?: 'pill' | 'button';
  alternativeStyle?: string;
  icon?: React.ReactNode;
}

export default function StepperButton({
  onPressHandler,
  icon,
  label,
  type = 'button',
  textPosition = 'text-center',
  alternativeTextStyle,
  alternativeBg,
  width = `w-full`,
  height = `h-12`,
  radius = 'rounded-lg',
  shadow,
  alternativeStyle,
}: StepperButtonProps) {
  return (
    <Button
      onPress={onPressHandler}
      label={label}
      type={type}
      className={clsx(
        height,
        width,
        radius,
        'flex',
        shadow,
        alternativeStyle,
        alternativeBg
      )}
      textClassName={clsx(
        'flex w-11/12 font-lato text-xs font-bold md:text-lg',
        textPosition,
        alternativeTextStyle
      )}
      icon={icon}
    />
  );
}
