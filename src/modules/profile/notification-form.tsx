import React from 'react';
import type { SubmitHandler } from 'react-hook-form';
import type { z } from 'zod';

import { translate } from '@/core';
import { Button, CheckboxInput, HeaderTitle, View } from '@/shared/components';
import { useCustomForm } from '@/shared/hooks';
import { NotificationFormSchema } from '@/shared/validations';

type NotificationFormType = z.infer<typeof NotificationFormSchema>;

type NotificationFormProps = {
  onSubmit: SubmitHandler<NotificationFormType>;
};
export const NotificationForm = ({
  onSubmit = () => {},
}: NotificationFormProps) => {
  const { handleSubmit, control } = useCustomForm(NotificationFormSchema);

  return (
    <View className="flex-1 items-center bg-white ">
      <HeaderTitle text="profile.info" type="default" />
      <View className="flex h-full flex-1 justify-between p-6">
        <View className="h-1/3">
          <CheckboxInput
            control={control}
            name="new"
            label={translate('notification.new')}
            accessibilityLabel={translate('notification.new')}
          />
          <CheckboxInput
            control={control}
            name="activity"
            label={translate('notification.activity')}
            accessibilityLabel={translate('notification.activity')}
          />
          <CheckboxInput
            control={control}
            name="newNavigator"
            label={translate('notification.newInfo')}
            accessibilityLabel={translate('notification.newInfo')}
          />
          <CheckboxInput
            control={control}
            name="activity"
            label={translate('notification.activity')}
            accessibilityLabel={translate('notification.activity')}
          />
        </View>
        <Button
          label={translate('notification.save')}
          onPress={handleSubmit(onSubmit)}
          className="h-12 rounded-md"
        />
      </View>
    </View>
  );
};
