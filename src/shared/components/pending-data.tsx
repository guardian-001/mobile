import React from 'react';
import { Text, View } from 'react-native';
type PendingProp = {
  message: string;
};
export function PendingData({ message }: PendingProp) {
  return (
    <View>
      <Text>{message}</Text>
    </View>
  );
}
