import { useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';

import { useArchitectProfileByIdApi } from '@/api/architect/profile/use-profile-by-id';
import { Avis, Card, GalerieIcon } from '@/assets/icons';

import type { Tab } from '../../types';
import About from '../about';
import Reviews from '../avis';
import Galerie from '../galerie';

export const useArchitectProfile = () => {
  const { architectData } = useLocalSearchParams();
  const architectId = architectData
    ? JSON.parse(architectData as string)
    : undefined;
  const {
    data: architect,
    isError,
    isLoading,
    isSuccess,
  } = useArchitectProfileByIdApi({
    variables: {
      architectId: architectId,
    },
  });

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
        return <Reviews />;
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
    isError,
    isLoading,
    isSuccess,
  };
};
