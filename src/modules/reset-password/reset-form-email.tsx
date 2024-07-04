import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button, ControlledInput, View } from '@/shared/components';
import { translate } from '@/translations/i18n';

const schema = z.object({
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email('Invalid email format'),
});

export type FormType = z.infer<typeof schema>;

export type ResetFormProps = {
  onSubmit?: SubmitHandler<FormType>;
};
export default function ResetFormEmail({
  onSubmit = () => {},
}: ResetFormProps) {
  const { handleSubmit, control, formState } = useForm<FormType>({
    resolver: zodResolver(schema),
  });
  return (
    <View className="flex-1">
      <ControlledInput
        control={control}
        name="email"
        label={translate('common.email')}
        placeholder={translate('common.yourEmail')}
        className="my-8"
      />
      <Button
        label={translate('resetpass.reset')}
        onPress={handleSubmit(onSubmit)}
        className="h-12 rounded-md"
        disabled={!formState.isValid}
      />
    </View>
  );
}
