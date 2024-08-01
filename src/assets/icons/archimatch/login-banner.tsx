import * as React from 'react';
import { Dimensions } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, {
  Defs,
  LinearGradient,
  Path,
  Pattern,
  Stop,
  Use,
} from 'react-native-svg';

import ImageSVGPNG from './image-svg-png';

const { width, height } = Dimensions.get('window');
export const LoginBanner = (props: SvgProps) => (
  <Svg width={width} height={height / 4} fill="none" {...props}>
    <Path fill="#98BCC8" d="M0 0h78.8v234H0z" />
    <Path fill="url(#a)" d="M0 0h78.8v234H0z" />
    <Path fill="#D2F6FF" d="M157.6 0h78.8v234h-78.8z" />
    <Path fill="url(#b)" d="M157.6 0h78.8v234h-78.8z" />
    <Path fill="#FCD2D9" d="M236.399 0h78.8v234h-78.8z" />
    <Path fill="url(#c)" d="M236.399 0h78.8v234h-78.8z" />
    <Path fill="#C7C5E3" d="M78.8 0h78.8v234H78.8z" />
    <Path fill="url(#d)" d="M78.8 0h78.8v234H78.8z" />
    <Path fill="#E3F5E4" d="M315.199 0h78.8v234h-78.8z" />
    <Path fill="url(#e)" d="M315.199 0h78.8v234h-78.8z" />
    <Path fill="url(#f)" d="M0 0h393v88H0z" />
    <Path fill="url(#g)" d="M0 132h393v103H0z" />
    <Defs>
      <Pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#h" transform="matrix(.002 0 0 .00067 -.572 .303)" />
      </Pattern>
      <Pattern
        id="b"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#i" transform="matrix(.00192 0 0 .00067 -.458 .289)" />
      </Pattern>
      <Pattern
        id="c"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#j" transform="matrix(.00206 0 0 .00068 -.544 .286)" />
      </Pattern>
      <Pattern
        id="d"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#k" transform="matrix(.00242 0 0 .0008 -.606 .25)" />
      </Pattern>
      <Pattern
        id="e"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#l" transform="matrix(.00166 0 0 .00055 -.428 .322)" />
      </Pattern>
      <ImageSVGPNG />
      <LinearGradient
        id="f"
        x1={196.5}
        x2={196}
        y1={0}
        y2={88}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#344054" stopOpacity={0.7} />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="g"
        x1={196.5}
        x2={196.217}
        y1={235}
        y2={131.999}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
);
