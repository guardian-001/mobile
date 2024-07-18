import { BackButton } from '@/modules/shared';
type ScreenOptionsProps = {
  route?: string;
  type?: 'default' | 'custom';
};

export const ScreenOptions = ({
  route,
  type = 'default',
}: ScreenOptionsProps) => {
  if (type === 'default') {
    return {
      headerTransparent: true,
      headerTitle: '',
      headerShown: true,
      headerLeft: () => <BackButton route={route} />,
    };
  } else {
    return {
      headerShown: false,
    };
  }
};
