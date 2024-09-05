import React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import colors from '@/theme/colors';
export const Eye = ({ color = colors.client, ...props }: SvgProps) => (
  <Svg className="h-5 w-6" viewBox="0 0 15 13" fill="none" {...props}>
    <Path
      d="M14.888 5.988c-.549-1.2-2.7-5.113-7.388-5.113S.66 4.788.112 5.988a1.23 1.23 0 000 1.025c.549 1.199 2.7 5.112 7.388 5.112 4.687 0 6.84-3.913 7.388-5.113a1.229 1.229 0 000-1.024zM7.5 10.875c-3.942 0-5.781-3.354-6.25-4.368.469-1.028 2.308-4.382 6.25-4.382 3.932 0 5.772 3.34 6.25 4.375-.478 1.036-2.318 4.375-6.25 4.375z"
      fill={color}
    />
    <Path
      d="M7.5 3.375a3.125 3.125 0 100 6.25 3.125 3.125 0 000-6.25zm0 5a1.875 1.875 0 110-3.75 1.875 1.875 0 010 3.75z"
      fill={color}
    />
  </Svg>
);
