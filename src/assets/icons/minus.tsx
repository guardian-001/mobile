import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import colors from '@/theme/colors';
export const Minus = (props: SvgProps) => (
  <Svg className="h-1 w-4" fill="none" {...props}>
    <Path
      stroke={colors.white}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M1 1.663h12"
    />
  </Svg>
);
