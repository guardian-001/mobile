import { useCallback } from 'react';
import { Dimensions } from 'react-native';

import { ProjectItem } from '../components/project-item';
import { projectList } from '../dump-data';
import type { ProjectItemProps } from '../types';

export const useInspiration = () => {
  const snapToOffsets = projectList.map(
    (_, index) => index * Dimensions.get('window').height
  );
  const renderItem = useCallback(
    ({ item }: ProjectItemProps) => <ProjectItem item={item} />,
    []
  );

  return {
    snapToOffsets,
    renderItem,
  };
};
