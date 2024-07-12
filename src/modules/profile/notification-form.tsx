import React from 'react';
import type { SubmitHandler } from 'react-hook-form';
import type { z } from 'zod';

import { translate } from '@/core';
import { Button, CheckboxInput, HeaderTitle, View } from '@/shared/components';
import useCustomForm from '@/shared/hooks/use-custom-form';
import { NotificationFormSchema } from '@/validations';

type NotificationFormType = z.infer<typeof NotificationFormSchema>;

type NotificationFormProps = {
  onSubmit: SubmitHandler<NotificationFormType>;
};
export const NotificationForm = ({
  onSubmit = () => {},
}: NotificationFormProps) => {
  const { handleSubmit, control } = useCustomForm(NotificationFormSchema);

  return (
    <View className="flex-1 items-center bg-white dark:bg-black">
      <HeaderTitle text="profile.info" type="default" />
      <View className="flex h-full flex-1 justify-between p-6">
        <View className="h-1/3">
          <CheckboxInput
            control={control}
            name="new"
            label={translate('notification.new')}
            accessibilityLabel="Nouveau pour vous"
          />
          <CheckboxInput
            control={control}
            name="activity"
            label={translate('notification.activity')}
            accessibilityLabel="L'activité du compte"
          />
          <CheckboxInput
            control={control}
            name="newNavigator"
            label={translate('notification.newInfo')}
            accessibilityLabel="Un nouveau navigateur utilisé pour se connecter"
          />
          <CheckboxInput
            control={control}
            name="activity"
            label={translate('notification.activity')}
            accessibilityLabel="L'activité du compte"
          />
        </View>
        <Button
          label={translate('notification.Save')}
          onPress={handleSubmit(onSubmit)}
          className="h-12 rounded-md"
        />
      </View>
    </View>
  );
};
