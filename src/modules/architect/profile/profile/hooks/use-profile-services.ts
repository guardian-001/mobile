import { useState } from 'react';

import { useArchitectProfileApi } from '@/api/architect/profile/use-profile';
import { useUpdateArchitectNeedsApi } from '@/api/architect/profile/use-update-supplier-needs';
import { useNeedsApi } from '@/api/architect/project';
import {
  showErrorMessage,
  showSuccesMessage,
  useModal,
} from '@/shared/components';
import { deepEqual } from '@/shared/utils';
import type { Need } from '@/types';

export const useProfileServices = () => {
  const { data: architect } = useArchitectProfileApi();
  const { data, isPending, isError, error, isSuccess, refetch } = useNeedsApi();
  const [selectedNeeds, setSelectedNeeds] = useState<Need[]>(
    architect?.needs || []
  );

  const { ref, present, dismiss } = useModal();

  const handleSelect = (need: Need) => {
    setSelectedNeeds((prev) =>
      prev.some((obj) => deepEqual(obj, need))
        ? prev.filter((item) => item.id !== need.id)
        : [...prev, need]
    );
  };

  const updateProfileNeeds = useUpdateArchitectNeedsApi();

  const updateNeeds = () => {
    if (selectedNeeds.length > 0) {
      updateProfileNeeds.mutate(
        { needs: selectedNeeds.map((need) => String(need.id)) },
        {
          onSuccess: (response) => {
            refetch();

            showSuccesMessage(response.data.message);
            dismiss();
          },
          onError: (errorApi) => {
            showErrorMessage(errorApi.message);
          },
        }
      );
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
