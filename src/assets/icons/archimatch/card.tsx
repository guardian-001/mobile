import React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

export const CardIcon = (props: SvgProps) => (
  <Svg className="h-5 w-6" viewBox="0 0 17 13" fill="none" {...props}>
    <Path
      d="M13.25.9h0-10.5 0A1.852 1.852 0 00.9 2.75v7h0c0 1.021.829 1.85 1.85 1.85h10.5a1.852 1.852 0 001.85-1.85v0-7 0A1.852 1.852 0 0013.25.9zm.95 8.85c0 .524-.426.95-.95.95H2.75a.951.951 0 01-.95-.95V5.3h12.4v4.45zm0-5.35H1.8V2.75s0 0 0 0c0-.524.426-.95.95-.95h10.5s0 0 0 0c.524 0 .95.426.95.95V4.4zM4.15 8.1h2.8a.45.45 0 000-.9h-2.8a.45.45 0 000 .9z"
      fill="#344054"
      stroke="#344054"
      strokeWidth={0.2}
    />
  </Svg>
);
