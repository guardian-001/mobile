import React from 'react';

import { HeaderTitle, ScrollView, Text } from '@/shared/components';

export const TransactionHistory = () => {
  return (
    <>
      <HeaderTitle
        text="supplierProfile.transactionHistoryOption"
        type="default"
      />
      <ScrollView
        className="flex-1 bg-background p-6 pt-12"
        contentContainerClassName="gap-4"
      >
        <Text>Transaction history </Text>
      </ScrollView>
    </>
  );
};
