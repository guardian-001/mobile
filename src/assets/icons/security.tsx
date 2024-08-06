import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import colors from '@/theme/colors';
export const Security = (props: SvgProps) => {
  const color = colors.blue;
  return (
    <Svg className="h-6 w-6" fill="none" {...props}>
      <Path
        fill={color}
        stroke={color}
        strokeWidth={0.2}
        d="M5.9 10v4.9c.001 1.213.972 2.199 2.172 2.2h6.908c1.2-.001 2.171-.987 2.173-2.2V10c-.002-1.18-.919-2.144-2.073-2.198V6.5c0-1.987-1.59-3.6-3.554-3.6-1.964 0-3.554 1.613-3.554 3.6v1.302C6.818 7.856 5.902 8.821 5.9 10Zm5.18 3.85h.892v-2.8a.448.448 0 0 0-.446-.45.448.448 0 0 0-.445.45v2.8ZM8.864 6.5c0-1.492 1.194-2.7 2.663-2.7 1.47 0 2.664 1.208 2.664 2.7v1.3H8.863V6.5Zm7.399 8.4c-.001.719-.576 1.3-1.282 1.3H8.072c-.706 0-1.28-.581-1.281-1.3V10c0-.719.575-1.3 1.281-1.3h6.908c.706 0 1.28.581 1.282 1.3v4.9Z"
      />
    </Svg>
  );
};
