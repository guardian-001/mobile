import type { ReactNode } from 'react';
import React from 'react';
import { View } from 'react-native';

interface ImageContainerProps {
  className: string;
  children: ReactNode;
}

const ImageContainer: React.FC<ImageContainerProps> = ({
  className,
  children,
}) => {
  return <View className={className}>{children}</View>;
};

export default ImageContainer;
