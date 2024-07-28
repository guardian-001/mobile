import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
type closeProps = {
  handleAction: () => void;
};
export default function CloseBtn({ handleAction }: closeProps) {
  return (
    <View className="absolute right-1 top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-slate-300/70">
      <TouchableOpacity
        className="  flex h-8 w-8 items-center justify-center  "
        onPress={handleAction}
      >
        <Text>X</Text>
        {/* <Close color={colors.blue} /> */}
      </TouchableOpacity>
    </View>
  );
}
