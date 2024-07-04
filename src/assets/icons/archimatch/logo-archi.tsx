import React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, {
  Defs,
  G,
  LinearGradient,
  Mask,
  Path,
  Rect,
  Stop,
} from 'react-native-svg';

export const LogoArchi = (props: SvgProps) => (
  <Svg
    width="100%"
    height="100%"
    viewBox="0 0 39 40"
    fill="none"
    {...props} // Spread other props here
  >
    <Rect
      y="0.5"
      width="100%"
      height="100%"
      rx="9"
      fill="url(#paint0_linear)"
    />
    <Mask
      id="mask0"
      mask-type="luminance" // Changed from maskType to mask-type
      maskUnits="userSpaceOnUse"
      x="13"
      y="6"
      width="13"
      height="28"
    >
      <Path
        d="M25.8333 6.99902H13.8115V33.6732H25.8333V6.99902Z"
        fill="white"
      />
    </Mask>
    <G mask="url(#mask0)">
      <Mask
        id="mask1"
        mask-type="luminance" // Changed from maskType to mask-type
        maskUnits="userSpaceOnUse"
        x="13"
        y="6"
        width="13"
        height="28"
      >
        <Path
          d="M25.8333 6.99902H13.8115V33.6732H25.8333V6.99902Z"
          fill="white"
        />
      </Mask>
      <G mask="url(#mask1)">
        <Path
          d="M25.8333 16.8885L13.8115 6.99902V11.9442L25.8333 21.7128V16.8885Z"
          fill="white"
        />
        <Path
          d="M25.8333 23.6933V24.0409V26.8991V33.6742H17.8457V24.7495V24.0409V22.3979V21.5683V20.4081V20.1062V17.1221L25.8333 23.6933Z"
          fill="white"
          fillOpacity="0.49"
        />
        <Path
          d="M21.8363 25.395V25.6335V28.6007V33.6736H13.8486V26.0859V25.6335V23.1203V22.6484V22.1098V21.955V18.8237L17.8424 22.1098L21.8363 25.395Z"
          fill="white"
        />
      </G>
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear"
        x1="37.1194"
        y1="-11.1398"
        x2="17.875"
        y2="28.5313"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#11ABEC" />
        <Stop offset="1" stopColor="#34BAF2" />
      </LinearGradient>
    </Defs>
  </Svg>
);
