import { useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';

import type { SupplierProfileInfoType } from '@/api/supplier/profile/types';
import { Card, GalerieIcon } from '@/assets/icons';
import type { Tab } from '@/modules/client/inspiration/types';

import About from '../about';
import Catalogue from '../catalogue';

export const useSupplierProfile = () => {
  const { supplier } = useLocalSearchParams();
  const supplierData: SupplierProfileInfoType | null = supplier
    ? JSON.parse(supplier as string)
    : null;

  const tabs: Tab[] = [
    { id: 'catalogue', label: 'common.catalogue', icon: GalerieIcon },
    { id: 'a-propos', label: 'inspiration.about', icon: Card },
  ];
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const supplierCollections = supplierData?.supplierCollections || [];

  const renderContent = () => {
    switch (activeTab) {
      case tabs[0].id:
        return <Catalogue collections={supplierCollections} />;
      case tabs[1].id:
        return <About supplierData={supplierData} />;
      default:
        return null;
    }
  };
  const [coverImageError, setCoverImageError] = useState(false);
  const [logoUrlError, setLogoUrlError] = useState(false);

  const fallbackCoverImage =
    'https://raw.githubusercontent.com/AzizSandid/AzizSandid/main/coverImage.png';
  const fallbackLogoUrl =
    'https://raw.githubusercontent.com/AzizSandid/AzizSandid/main/supplierImage.png';

  return {
    activeTab,
    tabs,
    renderContent,
    setActiveTab,
    coverImageError,
    setCoverImageError,
    logoUrlError,
    setLogoUrlError,
    fallbackCoverImage,
    fallbackLogoUrl,
    supplierData,
  };
};
