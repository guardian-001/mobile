import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import colors from '@/theme/colors';

export const GalerieIcon = ({ color = colors.blue, ...props }: SvgProps) => {
  return (
    <Svg className="h-5 w-6" fill="none" {...props}>
      <Path
        fill={color}
        d="M8.006 5.68a1.736 1.736 0 0 1 2.454 0l.693.693a.407.407 0 0 0 .567 0l3.966-3.966A3.337 3.337 0 0 0 12.673.5H6.666a3.335 3.335 0 0 0-3.333 3.333v4c0 .714.227 1.374.607 1.914L8.006 5.68ZM6.333 2.5c.553 0 1 .447 1 1 0 .553-.447 1-1 1-.553 0-1-.447-1-1 0-.553.447-1 1-1ZM8.22 16.38l-5.78-1.607a3.337 3.337 0 0 1-2.32-4.106l1.073-3.854A3.315 3.315 0 0 1 2 5.4v2.44a4.663 4.663 0 0 0 4.666 4.667h6.094l-.434 1.56a3.337 3.337 0 0 1-4.106 2.32v-.007ZM16 3.973v3.86a3.335 3.335 0 0 1-3.334 3.334h-6a3.366 3.366 0 0 1-1.76-.5l4.04-4.04a.407.407 0 0 1 .567 0l.693.693c.654.653 1.794.653 2.447 0L16 3.973Z"
      />
    </Svg>
  );
};
