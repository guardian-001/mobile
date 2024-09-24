import { translate, useCustomForm } from '@/core';

import { navigatorSchema } from '../schemas/profile-info-navigator';

export const useProfileNavigator = () => {
  const { control, form } = useCustomForm(navigatorSchema, {
    tag: 0,
  });
  const tags = [
    { id: 0, label: translate('architectProfile.travaux') },
    { id: 1, label: translate('architectProfile.propos') },
    { id: 2, label: translate('architectProfile.services') },
    { id: 3, label: translate('architectProfile.avis') },
  ];

  return {
    tags,
    control,
    state: form.watch('tag'),
  };
};
