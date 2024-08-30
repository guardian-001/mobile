import React from 'react';

import SupplierCatalogue from '@/modules/supplier/catalogue/supplier-catalogue';
import { FocusAwareStatusBar } from '@/shared/components';

export default function Projets() {
  return (
    <>
      <FocusAwareStatusBar />
      <SupplierCatalogue />
    </>
  );
}
