import * as React from 'react';

import { ArrowRight } from '@/assets/icons';
import type { TxKeyPath } from '@/core';
import { Text, TouchableOpacity, View } from '@/shared/components';

type ItemProps = {
  text: TxKeyPath;
  value?: string;
  onPress?: () => void;
  icon?: React.ReactNode;
  type?: 'Default' | 'basicInformation';
  className?: string;
};

export const Item = ({
  text,
  value,
  icon,
  onPress,
  type = 'Default',
  className,
}: ItemProps) => {
  const isPressable = onPress !== undefined;
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`${className} h-fit flex-1 flex-row items-center justify-between px-4 py-2`}
    >
      {type === 'basicInformation' ? (
        <>
          <View>
            <Text tx={text} />
            <Text className="text-sm text-description">{value}</Text>
          </View>
          {isPressable && (
            <View className="pl-2">
              <ArrowRight />
            </View>
          )}
        </>
      ) : (
        <>
          <View className="flex-row items-center">
            {icon && <View className="pr-2">{icon}</View>}
            <Text tx={text} />
          </View>
          <View className="flex-row items-center">
            <Text>{value}</Text>
            {isPressable && (
              <View className="pl-2">
                <ArrowRight />
              </View>
            )}
          </View>
        </>
      )}
    </TouchableOpacity>
  );
};
