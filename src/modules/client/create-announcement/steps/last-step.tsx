import React from 'react';

import { translate } from '@/core';
import { StepperButton } from '@/modules/shared';
import { Image, ScrollView, Text, View } from '@/shared/components';

import { LastStepCard } from '../components/last-step-card';
import { useLastStep } from '../hooks';
import type { LastStepCardType } from '../types';

export function LastStep() {
  const { router, LastStepCards } = useLastStep();
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerClassName="flex items-center"
    >
      <Image
        source={require('@/assets/icons/archimatch/announcement/lastStepIcon.svg')}
        className="h-52 w-52 rounded-xl"
      />
      <Text tx="announcement.congratulations" className=" text-lg font-bold" />
      <View className="mb-6 flex flex-row gap-1">
        <Text tx="announcement.published" className=" text-lg font-bold" />
        <Text
          tx="announcement.archiMatch"
          className=" text-xl font-bold text-primary"
        />
      </View>
      {LastStepCards.map((card: LastStepCardType, index) => (
        <LastStepCard
          key={index}
          SvgComponent={card.SvgComponent}
          title={card.title}
          description={card.description}
        />
      ))}
      <StepperButton
        onPressHandler={() => router.back()}
        label={translate('announcement.buttonLabelSuivre')}
      />
    </ScrollView>
  );
}
