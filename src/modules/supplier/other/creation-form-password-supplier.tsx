// import React from 'react';

// import { useCustomForm } from '@/core';
// import { Button, ControlledInput, Text, View } from '@/shared/components';
// import { PasswordSchema } from '@/shared/validations';
// import type { TxKeyPath } from '@/translations/i18n';
// import { translate } from '@/translations/i18n';

// import PasswordRequirementItem from '../../reset-password/password-requirement-item';

// export default function ResetFormPassword() {
//   const { handleSubmit, control, form } = useCustomForm(PasswordSchema);

//   const onSubmit()

//   const password = form.watch('password');

//   const passwordRequirements: { isValid: boolean; message: TxKeyPath }[] = [
//     {
//       isValid: password?.length >= 8,
//       message: 'resetpass.passwordMinLength',
//     },
//     {
//       isValid: /[a-z]/.test(password) && password?.length >= 1,
//       message: 'resetpass.passwordLowercase',
//     },
//     {
//       isValid: /[A-Z]/.test(password),
//       message: 'resetpass.passwordUppercase',
//     },
//     {
//       isValid: /[0-9]/.test(password),
//       message: 'resetpass.passwordDigit',
//     },
//     {
//       isValid: /[^a-zA-Z0-9]/.test(password),
//       message: 'resetpass.passwordSpecialChar',
//     },
//   ];

//   return (
//     <View className="w-full px-4">
//       <ControlledInput
//         control={control}
//         name="password"
//         label={translate('common.choosePassword')}
//         placeholder={translate('common.enterPassword')}
//         className="my-8"
//         secureTextEntry={true}
//       />
//       <View className="mb-4">
//         <Text tx="resetpass.passwordConditions" />
//         {passwordRequirements.map((requirement, index) => (
//           <PasswordRequirementItem
//             key={index}
//             isValid={requirement.isValid}
//             message={requirement.message}
//           />
//         ))}
//       </View>
//       <Button
//         label={translate('resetpass.reset')}
//         onPress={handleSubmit(onSubmit)}
//         className="h-12 rounded-md"
//         disabled={!form.formState.isValid}
//       />
//     </View>
//   );
// }
