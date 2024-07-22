import { useRouter } from 'expo-router';
import React from 'react';

import { ArrowRightLong } from '@/assets/icons/long-arrow-right';
import { translate } from '@/core';

import MainButton from '../shared/main-button';

export default function MainButtons() {
  const router = useRouter();

  const onPressHandler = (route: string) => {
    router.replace(route);
  };
  return (
    <>
      <MainButton
        onPressHandler={() => onPressHandler('/(architect)/(public)/login')}
        label={translate('onBoarding.architectBtn')}
        icon={<ArrowRightLong />}
        width="w-[86%]"
        height="h-14"
        radius="rounded-full"
        shadow="shadow-md"
        type="pill"
      />
      <MainButton
        onPressHandler={() =>
          onPressHandler('/(supplier)/(public)/login-email')
        }
        label={translate('onBoarding.supplierBtn')}
        icon={<ArrowRightLong />}
        // textPosition="text-center" //by default center
        width="w-[86%]"
        height="h-14"
        radius="rounded-full"
        shadow="shadow-md"
        type="pill"
      />
    </>
  );
}
