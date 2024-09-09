import React, { useCallback } from 'react';

import { useRealizationsByArchitectApi } from '@/api/architect/project/use-realizations-by-architect';

import type { ProjectItemProps } from '../../types';
import { ProjectItem } from '../components/project-item';

export const useGalerie = (architectId: number) => {
  const renderItem = useCallback(
    ({ item }: ProjectItemProps) => <ProjectItem item={item} />,
    []
  );
  const {
    data: Realizations,
    isError,
    isLoading,
    isSuccess,
  } = useRealizationsByArchitectApi({
    variables: {
      architectId: architectId,
    },
  });
  return {
    renderItem,
    Realizations,
    isError,
    isLoading,
    isSuccess,
  };
};
