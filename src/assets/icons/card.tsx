import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import colors from '@/theme/colors';

export const Card = ({ color = colors.blue, ...props }: SvgProps) => {
  return (
    <Svg className="h-5 w-6" fill="none" {...props}>
      <Path
        fill={color}
        fillRule="evenodd"
        d="M8.166.167h3.667c3.457 0 5.186 0 6.259 1.074 1.074 1.073 1.074 2.802 1.074 6.259 0 3.457 0 5.185-1.074 6.259-1.073 1.074-2.802 1.074-6.259 1.074H8.166c-3.456 0-5.185 0-6.259-1.074C.833 12.685.833 10.957.833 7.499c0-3.456 0-5.185 1.074-6.258C2.981.167 4.71.167 8.167.167Zm2.98 4.583a.687.687 0 0 1 .687-.688h4.583a.688.688 0 1 1 0 1.375h-4.583a.687.687 0 0 1-.688-.687Zm.916 2.75a.688.688 0 0 1 .688-.688h3.666a.688.688 0 1 1 0 1.375H12.75a.688.688 0 0 1-.688-.687Zm.917 2.75a.688.688 0 0 1 .687-.688h2.75a.688.688 0 1 1 0 1.375h-2.75a.687.687 0 0 1-.687-.687Zm-3.896-5.5a1.833 1.833 0 1 1-3.667 0 1.833 1.833 0 0 1 3.667 0ZM7.25 12.083c3.666 0 3.666-.82 3.666-1.833S9.276 8.416 7.25 8.416s-3.667.82-3.667 1.834c0 1.013 0 1.833 3.667 1.833Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};