import React from 'react';
import type { ViewProps } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { colors } from '@/shared/components';

type GradientBackgroundProps = ViewProps & {
  start?: { x: number; y: number };
  end?: { x: number; y: number };
  colors?: string[];
  className?: string;
};

export const GradientBackground = ({
  start = { x: 0, y: 1 },
  end = { x: 0, y: 0 },
  colors: gradientColors = [colors.background, colors['light-blue']],
  className,
  children,
  ...props
}: GradientBackgroundProps) => {
  return (
    <LinearGradient
      start={start}
      end={end}
      colors={gradientColors}
      className={className}
      {...props}
    >
      {children}
    </LinearGradient>
  );
};
