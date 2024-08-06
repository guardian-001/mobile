import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import colors from '@/theme/colors';
export const Terms = (props: SvgProps) => {
  const color = colors.blue;
  return (
    <Svg className="h-6 w-6" fill="none" {...props}>
      <Path
        fill={color}
        stroke={color}
        strokeWidth={0.2}
        d="M11.876 6.792a.875.875 0 1 1-1.75 0 .875.875 0 0 1 1.75 0ZM18 14.084v-3.885a7.121 7.121 0 0 0-6.512-7.182 7 7 0 0 0-7.47 7.481C4.276 14.206 7.548 17 11.632 17h3.452A2.92 2.92 0 0 0 18 14.084ZM11.41 4.18a5.95 5.95 0 0 1 5.425 6.018v3.885a1.75 1.75 0 0 1-1.75 1.75h-3.452c-3.52 0-6.231-2.275-6.45-5.416a5.833 5.833 0 0 1 6.227-6.237Zm.758 9.32V10a1.167 1.167 0 0 0-1.166-1.167h-.584a.583.583 0 1 0 0 1.166h.584v3.5a.583.583 0 1 0 1.166 0Z"
      />
    </Svg>
  );
};
