import React from 'react';
import type { SubmitHandler } from 'react-hook-form';
import type * as z from 'zod';

import { Button, ControlledInput, View } from '@/shared/components';
import useCustomForm from '@/shared/hooks/use-custom-form';
import { translate } from '@/translations/i18n';
import { EmailSchema } from '@/validations';

type EmailFormType = z.infer<typeof EmailSchema>;

type ResetFormProps = {
  onSubmit?: SubmitHandler<EmailFormType>;
};
export default function ResetFormEmail({
  onSubmit = () => {},
}: ResetFormProps) {
  const { handleSubmit, control, form } = useCustomForm(EmailSchema);

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
        disabled={!form.formState.isValid}
      />
    </View>
  );
}
