import React from 'react';

import { HeaderTitle, ScrollView } from '@/shared/components';

import { InvoiceCard } from './component/invoice-card';
import { invoicesList } from './dump-data';

export const HistoricalBilling = () => {
  return (
    <>
      <HeaderTitle text="supplierProfile.invoices" type="default" />
      <ScrollView
        className="flex-1 bg-background"
        contentContainerClassName="gap-4 p-6"
      >
        {invoicesList.map((item) => {
          return (
            <InvoiceCard
              title={item.title}
              date={item.date}
              price={item.price}
            />
          );
        })}
      </ScrollView>
    </>
  );
};
