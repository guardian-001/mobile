import { useRouter } from 'expo-router';

import {
  LastStepIcon1,
  LastStepIcon2,
  LastStepIcon3,
} from '@/assets/icons/archimatch';
import type { TxKeyPath } from '@/core';

export const useLastStep = () => {
  const router = useRouter();
  type cardType = {
    title: TxKeyPath;
    description: TxKeyPath;
    SvgComponent: React.ComponentType;
  };
  const cards: cardType[] = [
    {
      SvgComponent: LastStepIcon1,
      title: 'announcement.cardOneTitle',
      description: 'announcement.cardOneDescription',
    },
    {
      SvgComponent: LastStepIcon2,
      title: 'announcement.cardTwoTitle',
      description: 'announcement.cardTwoDescription',
    },
    {
      SvgComponent: LastStepIcon3,
      title: 'announcement.cardThreeTitle',
      description: 'announcement.cardThreeDescription',
    },
  ];
  return {
    router,
    cards,
  };
};
