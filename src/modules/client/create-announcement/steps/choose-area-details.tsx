import React from 'react';
import { useForm } from 'react-hook-form';

import { translate } from '@/core';
import { StepperButton } from '@/modules/shared';
import { Button, TagGroup, Text, View } from '@/shared/components';
import { useFormStepper } from '@/shared/providers';
import type { AnnouncementType } from '@/types/announcement';
export function ChooseAreaDetails() {
  const { onHandleBack, onHandleNext } = useFormStepper<AnnouncementType>();
  const methods = useForm({
    defaultValues: {
      cities: [],
      areas: [],
    },
  });
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <View className="flex flex-1 items-center justify-between pt-8">
      <View className="p-4">
        <Text className="mb-4 text-xl font-bold">Select Cities:</Text>
        <TagGroup
          name="cities"
          control={methods.control}
          tags={[
            'Tunis',
            'Ariana',
            'Sousse',
            'Bizerte',
            'Gabès',
            'Kairouan',
            'Sfax',
            'Monastir',
          ]}
        />

        <Text className="my-4 text-xl font-bold">Select Area:</Text>
        <TagGroup
          name="areas"
          control={methods.control}
          tags={[
            '< 40m²',
            '40m² - 90m²',
            '90m² - 200m²',
            '200m² - 500m²',
            '> 500m²',
          ]}
        />

        <Button label="Submit" onPress={methods.handleSubmit(onSubmit)} />
      </View>
      <View className="flex flex-row">
        <StepperButton
          width="w-[45%]"
          onPressHandler={onHandleBack}
          label={translate('signup.retour')}
        />
        <StepperButton
          width="w-[45%]"
          onPressHandler={onHandleNext}
          label={translate('signup.suivant')}
        />
      </View>
    </View>
  );
}
