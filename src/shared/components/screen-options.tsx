import { BackButton } from '@/modules/shared';
 
export const ScreenOptions = (route?: string) => {
  return {
    headerTransparent: true,
    headerTitle: '',
    headerShown: true,
    headerLeft: () => <BackButton route={route} />,
  };
};
