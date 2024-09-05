import { useState } from 'react';

import { useUpdateArchitectNeedsApi } from '@/api/architect/profile/use-update-supplier-needs';
import { useNeedsApi } from '@/api/architect/project';
import {
  showErrorMessage,
  showSuccesMessage,
  useModal,
} from '@/shared/components';

export const useProfileServices = () => {
  const [selectedNeeds, setSelectedNeeds] = useState<string[]>([]);
  const { data, isPending, isError, error, isSuccess } = useNeedsApi();
  const { ref, present, dismiss } = useModal();
  const handleSelect = (name: string) => {
    if (selectedNeeds.includes(name)) {
      setSelectedNeeds(selectedNeeds.filter((item) => item !== name));
    } else {
      setSelectedNeeds((prev) => [...prev, name]);
    }
  };
  const updateProfileNeeds = useUpdateArchitectNeedsApi();
  const updateNeeds = () => {
    if (selectedNeeds.length > 0) {
      updateProfileNeeds.mutate(selectedNeeds, {
        onSuccess: (response) => {
          showSuccesMessage(response.data.message);
        },
        onError: (error) => {
          showErrorMessage(error.message);
        },
      });
    }
  };
  return {
    error,
    needs: data,
    isError,
    isPending,
    isSuccess,
    ref,
    present,
    dismiss,
    handleSelect,
    updateNeeds,
    selectedNeeds,
  };
};
