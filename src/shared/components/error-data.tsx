import React from 'react';
import { Text, View } from 'react-native';
type ErrorProp = {
  message: string;
};
export function ErrorData({ message }: ErrorProp) {
  return (
    <View>
      <Text>{message}</Text>
    </View>
  );
}
