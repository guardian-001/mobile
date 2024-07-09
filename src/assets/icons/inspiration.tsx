import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import colors from '@/theme/colors';
const Inspiration = ({ color = colors.black, ...props }: SvgProps) => (
  <Svg className="h-6 w-5" fill="none" {...props}>
    <Path
      fill={color}
      stroke="#fff"
      strokeWidth={0.6}
      d="M12.996 2.907A7.497 7.497 0 0 0 .566 7.52a7.45 7.45 0 0 0 2.328 6.466 5.218 5.218 0 0 1 1.776 3.805v.134A3.079 3.079 0 0 0 7.744 21h.516a3.077 3.077 0 0 0 3.074-3.075v-.457a4.438 4.438 0 0 1 1.61-3.333 7.494 7.494 0 0 0 .052-11.23v.002ZM8.26 19.334h-.516a1.41 1.41 0 0 1-1.408-1.409l-.007-.258h3.34v.258a1.41 1.41 0 0 1-1.409 1.409Zm3.583-6.45A6.39 6.39 0 0 0 9.873 16H8.835v-5.986a2.499 2.499 0 0 0 1.666-2.346.833.833 0 1 0-1.666 0 .833.833 0 1 1-1.666 0 .833.833 0 1 0-1.666 0 2.5 2.5 0 0 0 1.666 2.346V16H6.068a7.195 7.195 0 0 0-2.04-3.233A5.833 5.833 0 0 1 8.01 2.668a5.765 5.765 0 0 1 3.875 1.482 5.827 5.827 0 0 1-.04 8.733h-.002Z"
    />
  </Svg>
);
export default Inspiration;
