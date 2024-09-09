import { useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';

import type { ArchitectProfileInfoType } from '@/api/architect/profile/types';
import { Avis, Card, GalerieIcon } from '@/assets/icons';

import { architectDumpData } from '../../dump-data/architect-profile';
import type { Tab } from '../../types';
import About from '../about';
import Reviews from '../avis';
import Galerie from '../galerie';

export const useArchitectProfile = () => {
  const { architectData } = useLocalSearchParams();
  const architect: ArchitectProfileInfoType = architectData
    ? JSON.parse(architectData as string)
    : null;
  const [activeTab, setActiveTab] = useState('a-propos');
  const tabs: Tab[] = [
    { id: 'a-propos', label: 'inspiration.about', icon: Card },
    { id: 'gallerie', label: 'inspiration.gallery', icon: GalerieIcon },
    { id: 'avis', label: 'inspiration.reviews', icon: Avis },
  ];
  const renderContent = () => {
    switch (activeTab) {
      case tabs[0].id:
        return <About architect={architect} />;
      case tabs[1].id:
        return <Galerie architectId={architect?.id} />;
      case tabs[2].id:
        return <Reviews reviews={architectDumpData?.reviews} />;
      default:
        return null;
    }
  };
  return {
    activeTab,
    tabs,
    renderContent,
    setActiveTab,
    architect,
  };
};
