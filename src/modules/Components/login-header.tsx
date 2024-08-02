import React from 'react';

import { CompleteLogo, CompleteLogoClient } from '@/assets/icons/archimatch';
import { Image, ImageContainer } from '@/shared/components';
import { useRouteName } from '@/shared/hooks/use-get-route';
export default function LoginHeader() {
  const space = useRouteName();
  return (
    <>
      <Image
        source={require('@/assets/images/login-banner.png')}
        className="h-52 w-full"
      />
      <ImageContainer className="flex-center h-1/8 -mt-5 flex justify-center">
        {space === 'client' ? <CompleteLogoClient /> : <CompleteLogo />}
      </ImageContainer>
    </>
  );
}
