import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';

import { getStatus } from '@/core/auth/utils';
import { colors, GradientBackground } from '@/shared/components';

import { Header } from './header';
interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const [appStatus, setAppStatus] = useState<string | null>(null);

  useEffect(() => {
    const fetchStatus = async () => {
      const status = await getStatus();
      setAppStatus(status?.toString() || null);
    };

    fetchStatus();
  }, []);

  return (
    <GradientBackground colors={[colors.white, colors['extra-light-blue']]}>
      <Header appStatus={appStatus} router={router} />
      {children}
    </GradientBackground>
  );
};
