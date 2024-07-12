import * as React from 'react';
import { useColorScheme } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import colors from '@/theme/colors';
export const User = (props: SvgProps) => {
  const colorScheme = useColorScheme();
  const color = colorScheme === 'dark' ? colors.white : colors.blue;
  return (
    <Svg className="h-6 w-6" fill="none" {...props}>
      <Path
        fill={color}
        stroke={color}
        strokeWidth={0.2}
        d="M11.436 11.86a3.998 3.998 0 0 0 2.006-3.46 4 4 0 0 0-8 0c0 1.482.809 2.772 2.006 3.462a6.616 6.616 0 0 0-4.542 5.242v.002a.425.425 0 0 0 .839.138 5.773 5.773 0 0 1 11.396 0 .425.425 0 0 0 .418.355m-4.123-5.738 4.122 5.738m-4.122-5.738a6.62 6.62 0 0 1 4.543 5.242m-4.543-5.242 4.543 5.242m-.42.496a.418.418 0 0 0 .071-.006l-.071.006Zm.42-.495a.425.425 0 0 1-.349.489l.349-.49Zm-6.537-5.555a3.15 3.15 0 1 1 0-6.299 3.15 3.15 0 0 1 0 6.3Z"
      />
    </Svg>
  );
};
