import { useCallback } from 'react';
import { Dimensions } from 'react-native';

import { useRealizationsApi } from '@/api/architect/project';
import { useFormStepper } from '@/shared';

import { ProjectItem } from '../components/project-item';
import type { InspirationRequestType, ProjectItemProps } from '../types';

export const useInspiration = () => {
  const { formData } = useFormStepper<InspirationRequestType>();
  const {
    data: Realizations,
    isError,
    isLoading,
    isSuccess,
  } = useRealizationsApi({
    variables: {
      categories: formData.projectCategory,
      properties: formData.propertyType,
    },
  });
  const snapToOffsets = Realizations?.map(
    (_, index) => index * Dimensions.get('window').height
  );
  const renderItem = useCallback(
    ({ item }: ProjectItemProps) => <ProjectItem item={item} />,
    []
  );

  return {
    snapToOffsets,
    renderItem,
    Realizations,
    isError,
    isLoading,
    isSuccess,
  };
};
