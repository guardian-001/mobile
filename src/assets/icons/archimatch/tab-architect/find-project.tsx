import { View } from 'moti';
import React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import colors from '@/theme/colors';

export const FindProject = ({ color = colors.black, ...props }: SvgProps) => {
  return (
    <View className="flex h-5 w-5  items-center justify-center  ">
      <Svg
        width="100%"
        height="100%"
        viewBox="0 0 20 20"
        fill={color}
        {...props}
      >
        <Path
          d="M17.125 7.23v8.708c0 .654-.533 1.187-1.188 1.187H8.021a1.189 1.189 0 01-1.188-1.187V7.229c0-.654.533-1.187 1.188-1.187h.791a.396.396 0 010 .791h-.791a.396.396 0 00-.396.396v1.98h1.187a.396.396 0 010 .791H7.625v5.938c0 .218.178.395.396.395h3.562v-3.958h-1.188a.396.396 0 010-.792h3.167a.396.396 0 010 .792h-1.187v3.958h3.562a.396.396 0 00.396-.395V7.229a.396.396 0 00-.396-.396h-3.166a.396.396 0 00-.396.396v1.584a.396.396 0 01-.792 0V7.229c0-.654.533-1.187 1.188-1.187h3.166c.655 0 1.188.533 1.188 1.187z"
          fill={color}
          stroke={color}
          strokeWidth={0.2}
        />
        <Path
          d="M15.938 3.667H5.25V2.479C5.25 1.39 4.363.5 3.27.5h-.395A2.378 2.378 0 00.5 2.875v14.311c0 1.34 1.05 2.314 2.488 2.314h12.95a3.567 3.567 0 003.562-3.563V7.23a3.567 3.567 0 00-3.563-3.562zM1.291 2.875c0-.873.71-1.583 1.583-1.583h.396c.655 0 1.187.532 1.187 1.187v11.084c0 .654-.532 1.187-1.187 1.187h-.396a2.38 2.38 0 00-1.583.605V2.875zm17.416 13.063a2.77 2.77 0 01-2.77 2.77H2.874a1.583 1.583 0 110-3.166h.396c1.093 0 1.979-.886 1.979-1.98V4.459h10.688a2.77 2.77 0 012.77 2.771v8.709z"
          fill={color}
          stroke={color}
          strokeWidth={0.2}
        />
      </Svg>
    </View>
  );
};
