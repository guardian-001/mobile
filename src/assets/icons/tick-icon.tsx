import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import colors from '@/theme/colors';

interface TickIconProps extends SvgProps {
  color?: string;
}

const TickIcon: React.FC<TickIconProps> = ({
  color = colors.black,
  ...props
}) => (
  <Svg className="h-6 w-6 " fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      d="m16.726 7-.64.633c-2.207 2.212-3.878 4.047-5.955 6.158l-2.28-1.928-.69-.584L6 12.66l.683.577 2.928 2.477.633.535.591-.584c2.421-2.426 4.148-4.367 6.532-6.756l.633-.64L16.726 7Z"
      fill={color}
    />
  </Svg>
);

export default TickIcon;
