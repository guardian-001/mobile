import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import colors from '@/theme/colors';

export const SuperficieIcon = ({ color = colors.blue, ...props }: SvgProps) => {
  return (
    <Svg className="h-6 w-6" fill="none" {...props}>
      <Path
        fill={color}
        stroke={color}
        strokeWidth={0.1}
        d="M20.5 3.01h-2V1.504A.501.501 0 0 0 18 1c-.276 0-.5.225-.5.503V3.01h-13V1.503A.501.501 0 0 0 4 1c-.276 0-.5.225-.5.503V3.01h-2c-.277 0-.5.225-.5.502v7.038c0 .277.224.502.5.502h2v7.54a.501.501 0 1 0 1 0v-7.54h13v7.54a.501.501 0 1 0 1 0v-7.54h2c.276 0 .5-.225.5-.503V3.513a.501.501 0 0 0-.5-.502ZM2 4.017h5.223L2 9.266v-5.25Zm.637 6.032 6-6.032h4.736l-6 6.032H2.637Zm6.15 0 6-6.032h4.586l-6 6.032H8.787Zm11.213 0h-5.213L20 4.807v5.24Z"
      />
    </Svg>
  );
};
