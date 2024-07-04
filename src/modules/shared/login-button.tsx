import clsx from 'clsx';
import React from 'react';

import { Button } from '@/shared/components';

interface LoginButtonProps {
  loginFunction: (e?: React.BaseSyntheticEvent) => Promise<void>;
  type?: 'pill' | 'button';
  label: string;
  width?: string;
  height?: string;
  radius?: string;
  shadow?: string;
  textPosition?: string;
  alternativeStyle?: string;
  icon?: React.ReactNode;
}

export default function LoginButton({
  loginFunction,
  type,
  icon,
  label,

  textPosition = 'text-center',
  width = `w-full`,
  height = `h-10`,
  radius = 'rounded-md',
  shadow,
  alternativeStyle,
}: LoginButtonProps) {
  return (
    <Button
      onPress={() => {
        loginFunction();
      }}
      label={label}
      type={type}
      className={clsx(height, width, radius, 'flex', shadow, alternativeStyle)}
      textClassName={clsx(
        'flex w-11/12 font-lato text-xs font-bold',
        textPosition
      )}
      icon={icon}
    />
  );
}
