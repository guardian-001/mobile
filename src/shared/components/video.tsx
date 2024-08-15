import type { VideoProps } from 'expo-av';
import { Video as NVideo } from 'expo-av';
import { cssInterop } from 'nativewind';
import * as React from 'react';

export type VidProps = VideoProps & {
  className?: string;
};

cssInterop(NVideo, { className: 'style' });

export const Video = ({ style, className, ...props }: VidProps) => {
  return <NVideo className={className} style={style} {...props} />;
};
