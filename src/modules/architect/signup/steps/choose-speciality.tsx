import React from 'react';
import { Platform } from 'react-native';

import { HouseModel, InteriorHouseModel } from '@/assets/icons/archimatch';
import { translate } from '@/core';
import { StepButtons } from '@/modules/shared';
import {
  HeaderTitle,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  ToggleCard,
  View,
} from '@/shared/components';

import { useSpeciality } from '../shared/hooks';

export function ChooseSpeciality() {
  const { handleSubmit, control, onHandleBack, onSubmit, error } =
    useSpeciality();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className={`mb-5 flex h-full flex-1 items-center justify-between gap-16`}
    >
      <HeaderTitle text="signup.headerTitle" type="custom" />

      <View className="mt-[15vh]">
        <Text
          tx={'signupStepSpeciality.title'}
          className="mb-2 text-center text-2xl font-extrabold"
        />
        <Text
          tx={'signupStepSpeciality.description'}
          className="max-w-xs text-center text-sm text-description"
        />
      </View>

      <ScrollView className="flex flex-1">
        <ToggleCard
          className="h-38 mb-10 w-64 rounded-2xl"
          title={translate('signupStepSpeciality.constructionArchitect')}
          svgComponent={HouseModel}
          name="architectSpeciality"
          control={control}
          value={1}
        />

        <ToggleCard
          className="h-38 mb-7 w-64 rounded-2xl"
          title={translate('signupStepSpeciality.interiorArchitect')}
          svgComponent={InteriorHouseModel}
          name="architectSpeciality"
          control={control}
          value={2}
        />
      </ScrollView>
      {error && <Text tx={error} className="text-sm text-error" />}
      <StepButtons
        previous={{ handlePreviousStep: onHandleBack, label: 'common.ignore' }}
        next={{ handleSubmit: handleSubmit(onSubmit), label: 'common.next' }}
      />
    </KeyboardAvoidingView>
  );
}
