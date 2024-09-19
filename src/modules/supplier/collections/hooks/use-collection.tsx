import { useRouter } from 'expo-router';

import { useCustomForm } from '@/core';
import { SearchSchema } from '@/shared/validations';

export const useCollection = () => {
  const router = useRouter();
  const { handleSubmit, control } = useCustomForm(SearchSchema);
  const navigateTo = () => {
    router.push('/(supplier)/(private)/(collection)/collection');
  };

  return {
    navigateTo,
    handleSubmit,
    control,
  };
};
