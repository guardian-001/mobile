import React from 'react';

import { CardIcon } from '@/assets/icons/archimatch';
import {
  HeaderTitle,
  Item,
  ItemsContainer,
  ScrollView,
  View,
} from '@/shared/components';

import { usePayment } from './hooks/use-payment';

export const PaymentMethods = () => {
  const { navigateTo } = usePayment();

  return (
    <View className="flex-1">
      <HeaderTitle text="profile.payement" type="default" />
      <ScrollView
        contentContainerClassName="p-6 pb-20 gap-4"
        showsVerticalScrollIndicator={false}
      >
        <ItemsContainer title="supplierProfile.paymentDetailsTitle">
          <Item
            text="supplierProfile.bankCardOption"
            icon={<CardIcon />}
            onPress={() => navigateTo(`bank-card/`)}
            className="py-4"
          />
          <Item
            text="supplierProfile.paymentMethodOption"
            icon={<CardIcon />}
            onPress={() => navigateTo(`transfer/`)}
            className="py-4"
          />
          <Item
            text="supplierProfile.transactionHistoryOption"
            icon={<CardIcon />}
            onPress={() => navigateTo(`transaction/`)}
            className="py-4"
          />
        </ItemsContainer>
      </ScrollView>
    </View>
  );
};
