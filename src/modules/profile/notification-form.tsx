import React from 'react';

import { CheckboxInput, HeaderTitle, View } from '@/shared/components';
import useCustomForm from '@/shared/hooks/use-custom-form';
import { NotificationFormSchema } from '@/validations';

type NotificationFormProps = {};

export const NotificationForm = ({}: NotificationFormProps) => {
  const { control } = useCustomForm(NotificationFormSchema);

  return (
    <View className="flex-1 bg-white dark:bg-black">
      <HeaderTitle text="profile.info" type="default" />
      <View className="h-2/5 p-6">
        <CheckboxInput
          control={control}
          name="new"
          label="Nouveau pour vous"
          accessibilityLabel="Nouveau pour vous"
        />
        <CheckboxInput
          control={control}
          name="activity"
          label="L'activité du compte"
          accessibilityLabel="L'activité du compte"
        />
        <CheckboxInput
          control={control}
          name="activity"
          label="L'activité du compte"
          accessibilityLabel="L'activité du compte"
        />
        <CheckboxInput
          control={control}
          name="activity"
          label="L'activité du compte"
          accessibilityLabel="L'activité du compte"
        />
      </View>
    </View>
  );
};
