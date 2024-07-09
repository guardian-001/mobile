import { BackButton } from '@/modules/shared';

export const ScreenOptions = (route?: 'init') => {
  return {
    headerTransparent: true,
    headerTitle: '',
    headerShown: true,
    headerLeft: () => <BackButton route={route} />,
  };
};
