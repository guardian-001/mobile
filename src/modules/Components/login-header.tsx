import React from 'react';

import {
  CompleteLogo,
  CompleteLogoClient,
  LoginBanner,
} from '@/assets/icons/archimatch';
import { ImageContainer } from '@/shared/components';
import { useRouteName } from '@/shared/hooks/use-get-route';

export default function LoginHeader() {
  const space = useRouteName();
  return (
    <>
      <ImageContainer className="flex-start h-2/8 flex w-full justify-center">
        <LoginBanner />
      </ImageContainer>
      <ImageContainer className="flex-center h-1/8  -mt-5 flex    justify-center">
        {space === 'client' ? <CompleteLogoClient /> : <CompleteLogo />}
      </ImageContainer>
    </>
  );
}
