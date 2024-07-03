import type { ReactNode } from 'react';
import React from 'react';
import { View } from 'react-native';

interface ImageContainerProps {
  className: string;
  children: ReactNode;
}

const ImageContainer: React.FC<ImageContainerProps> = ({
  // width,
  // height,
  className,
  children,
}) => {
  // const containerStyle: ViewStyle = { width, height };style={containerStyle}

  return <View className={className}>{children}</View>;
};

export default ImageContainer;
