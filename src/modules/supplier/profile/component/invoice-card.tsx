import * as React from 'react';

import { Upload } from '@/assets/icons';
import { Text, View } from '@/shared/components';

type Props = {
  title: string;
  date: string;
  price: string;
};
export const InvoiceCard = ({ title, date, price }: Props) => {
  return (
    <View className="flex h-fit flex-row items-center justify-between rounded-2xl bg-white p-3 shadow-md  shadow-color-shadow">
      <View>
        <Text className="font-extrabold text-primary-txt">{title}</Text>
        <Text className="text-sm font-semibold text-description">{date}</Text>
      </View>
      <View className="flex flex-row items-center gap-3">
        <Text className="text-primary-txt">{price}</Text>
        <Upload />
      </View>
    </View>
  );
};
