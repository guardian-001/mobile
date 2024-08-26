import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface IconDisplayProps {
  count: string;
  SvgComponent: React.ComponentType<{ color?: string }>;
  onPress: () => void;
}
export const IconDisplay = ({
  SvgComponent,
  count,
  onPress,
}: IconDisplayProps) => (
  <View className="items-center gap-1">
    <TouchableOpacity onPress={onPress}>
      <SvgComponent />
    </TouchableOpacity>
    <Text className="text-sm font-bold text-white">{count}</Text>
  </View>
);
