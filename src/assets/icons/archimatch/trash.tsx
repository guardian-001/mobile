import React from 'react';
import { View } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import colors from '@/theme/colors';

export const Trash = ({ color = colors.blue, ...props }: SvgProps) => {
  return (
    <View className="flex h-5 w-8  items-center justify-center">
      <Svg
        width="100%"
        height="100%"
        viewBox="0 0 16 17"
        fill="none"
        {...props}
      >
        <Path
          fill={color}
          d="M15.702 3.571a.686.686 0 0 1-.695.677h-.615l-.887 9.12c-.17 1.747-1.657 3.065-3.46 3.065h-3.98c-1.8 0-3.287-1.316-3.46-3.06l-.9-9.125h-.598a.686.686 0 0 1-.695-.677c0-.374.311-.677.695-.677h2.85C4.28 1.351 5.684.186 7.362.186h1.39c1.678 0 3.083 1.165 3.406 2.708h2.85c.384 0 .694.303.694.677ZM5.396 2.894h5.321A2.085 2.085 0 0 0 8.752 1.54h-1.39c-.907 0-1.679.566-1.966 1.354Zm7.6 1.354H3.1l.888 8.994c.103 1.048.995 1.837 2.076 1.837h3.98c1.082 0 1.974-.79 2.076-1.84l.875-8.991Z"
        />
      </Svg>
    </View>
  );
};
