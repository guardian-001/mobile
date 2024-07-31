import * as React from 'react';

import type { TxKeyPath } from '@/core';
import { Text, View } from '@/shared/components';

type Props = {
  SvgComponent: React.ComponentType;
  title: TxKeyPath;
  description: TxKeyPath;
};
export const LastStepCard = ({ SvgComponent, title, description }: Props) => {
  return (
    <View className="mb-10 flex w-full flex-row items-center justify-around ">
      <SvgComponent />
      <View>
        <Text tx={title} className="mb-2 font-bold" />
        <Text
          tx={description}
          className="max-w-[250px] text-center text-sm text-description"
        />
      </View>
    </View>
  );
};
