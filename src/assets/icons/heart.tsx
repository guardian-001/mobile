import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import colors from '@/theme/colors';

export const Heart = ({ color = colors.white, ...props }: SvgProps) => (
  <Svg className="h-8 w-8" fill="none" {...props}>
    <Path
      fill={color}
      stroke={color}
      d="M12.5 22c-.443 0-.866-.143-1.223-.415-2.424-1.839-8.216-6.413-9.67-9.184-1.9-3.62-.76-8.271 2.54-10.366A6.528 6.528 0 0 1 7.647 1c1.835 0 3.56.768 4.852 2.136C13.792 1.768 15.516 1 17.352 1c1.227 0 2.434.359 3.5 1.035 3.299 2.095 4.44 6.745 2.544 10.367-1.453 2.77-7.246 7.344-9.67 9.183A2.029 2.029 0 0 1 12.5 22Z"
    />
  </Svg>
);
