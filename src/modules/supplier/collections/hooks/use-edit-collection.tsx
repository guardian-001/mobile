import { useCustomForm } from '@/core';
import { SearchSchema } from '@/shared/validations';

export const useEditCollection = () => {
  const { handleSubmit, control } = useCustomForm(SearchSchema);

  return {
    handleSubmit,
    control,
  };
};
