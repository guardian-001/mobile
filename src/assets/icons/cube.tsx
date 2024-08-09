import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import colors from '@/theme/colors';

export const Cube = ({ color = colors.blue, ...props }: SvgProps) => {
  return (
    <Svg className="h-5 w-4 " fill="none" {...props}>
      <Path
        fill={color}
        d="M.001 2.996a.34.34 0 0 1 .205-.32L6.778.022a.291.291 0 0 1 .221.001l6.55 2.71a.37.37 0 0 1 .201.344l-.007 9.107a.338.338 0 0 1-.21.32l-6.49 2.463a.386.386 0 0 1-.325-.003L.206 12.329A.339.339 0 0 1 0 12.012H0V3.024l.001-.028Zm13.12.548L7.204 6.012v8.174l5.912-2.243.007-8.4ZM6.886.702 1.162 3.014l5.749 2.393 5.65-2.356L6.885.701ZM6.572 14.18V5.992L.63 3.519v8.258l5.942 2.404Z"
      />
    </Svg>
  );
};
