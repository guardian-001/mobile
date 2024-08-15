import React from 'react';

import { HeaderTitle, ScrollView, Text } from '@/shared/components';

export const BankCardForm = () => {
  return (
    <>
      <HeaderTitle text="supplierProfile.bankCardOption" type="default" />
      <ScrollView
        className="flex-1 bg-background p-6 pt-12"
        contentContainerClassName="gap-4"
      >
        <Text>BankCardForm</Text>
      </ScrollView>
    </>
  );
};
