import React, { useCallback } from 'react';

import type { ProjectItemProps } from '../../types';
import { ProjectItem } from '../components/project-item';

export const useGalerie = () => {
  const renderItem = useCallback(
    ({ item }: ProjectItemProps) => <ProjectItem item={item} />,
    []
  );

  return {
    renderItem,
  };
};
