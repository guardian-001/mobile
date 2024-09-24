import { useRouter } from 'expo-router';

import { Category, Location, StyleIcon, SuperficieIcon } from '@/assets/icons';

import type { details, ProjectItemProps } from '../types';

export const useProjectDetailsModal = ({ item }: ProjectItemProps) => {
  const details: details[] = [
    {
      icon: Category,
      title: 'realisation.finalStep.categorie',
      value: item?.projectCategory.label ?? '',
    },
    {
      icon: StyleIcon,
      title: 'realisation.finalStep.style',
      value: item?.architecturalStyle.label ?? '',
    },
    {
      icon: SuperficieIcon,
      title: 'realisation.finalStep.superficie',
      value: item?.workSurface ?? '',
    },
    {
      icon: Location,
      title: 'realisation.finalStep.localisation',
      value: item?.city ?? '',
    },
  ];

  const router = useRouter();
  const navigateToProfile = () => {
    router.push({
      pathname: '(client)/(private)/(architect-profile)/profile',
      params: { architectData: item?.architect.id },
    });
  };
  return {
    details,
    navigateToProfile,
  };
};
