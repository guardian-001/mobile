import { useState } from 'react';

import { Avis, Card, GalerieIcon } from '@/assets/icons';

import { architect } from '../../dump-data/architect-profile';
import type { Tab } from '../../types';
import About from '../about';
import Reviews from '../avis';
import Galerie from '../galerie';

export const useArchitectProfile = () => {
  const [activeTab, setActiveTab] = useState('a-propos');
  const tabs: Tab[] = [
    { id: 'a-propos', label: 'inspiration.about', icon: Card },
    { id: 'gallerie', label: 'inspiration.gallery', icon: GalerieIcon },
    { id: 'avis', label: 'inspiration.reviews', icon: Avis },
  ];
  const renderContent = () => {
    switch (activeTab) {
      case 'a-propos':
        return <About />;
      case 'gallerie':
        return <Galerie />;
      case 'avis':
        return <Reviews reviews={architect.reviews} />;
      default:
        return null;
    }
  };
  return {
    activeTab,
    tabs,
    renderContent,
    setActiveTab,
  };
};
