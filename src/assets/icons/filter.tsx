import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import colors from '@/theme/colors';
export const Filter = ({ color = colors.blue, ...props }: SvgProps) => {
  return (
    <Svg className="h-4 w-4" fill="none" {...props}>
      <Path
        fill={color}
        d="M1.133 2.533h1.46a1.988 1.988 0 0 0 3.837 0h6.437a.533.533 0 0 0 0-1.066H6.43a1.988 1.988 0 0 0-3.837 0h-1.46a.533.533 0 0 0 0 1.066Zm3.378-1.466a.933.933 0 1 1 0 1.866.933.933 0 0 1 0-1.866ZM12.867 6.467h-1.46a1.987 1.987 0 0 0-3.836 0H1.133a.533.533 0 1 0 0 1.066h6.438a1.987 1.987 0 0 0 3.837 0h1.459a.533.533 0 0 0 0-1.066ZM9.489 7.933a.934.934 0 1 1 0-1.867.934.934 0 0 1 0 1.867ZM12.867 11.467H6.43a1.988 1.988 0 0 0-3.837 0h-1.46a.533.533 0 0 0 0 1.066h1.46a1.988 1.988 0 0 0 3.837 0h6.437a.533.533 0 0 0 0-1.066ZM4.51 12.933a.934.934 0 1 1 0-1.867.934.934 0 0 1 0 1.867Z"
      />
    </Svg>
  );
};
