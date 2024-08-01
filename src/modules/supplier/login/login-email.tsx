// import React from 'react';
// import { View } from 'react-native';
// import type * as z from 'zod';

// import { translate } from '@/core';
// import { Checkbox, ControlledInput, Text } from '@/shared/components';
// import type { LoginFormSchema } from '@/shared/validations';

// import { Container } from '../shared';
// import LoginButton from '../shared/login-button';
// import { useLoginEmailSupplier } from './shared/hooks/use-login-email-supplier';
// export type LoginFormType = z.infer<typeof LoginFormSchema>;

// export type LoginType = {
//   name: string;
//   data: string;
// };

// export const LoginEmail = () => {
//   const { handleSubmit, onSubmit, control } = useLoginEmailSupplier();
//   return (
//     <View className="flex w-full justify-center">
//       <ControlledInput
//         testID="email-input"
//         control={control}
//         name="email"
//         label={translate('login.email')}
//         placeholder={translate('login.email')}
//         handleOnChange={handleData}
//       />
//       <ControlledInput
//         testID="password-input"
//         control={control}
//         name="password"
//         label={translate('login.mdp')}
//         placeholder={translate('login.mdp')}
//         secureTextEntry={true}
//         handleOnChange={handleData}
//       />
//       <Container style="flex-row justify-between my-3">
//         <Checkbox
//           checked={checked}
//           onChange={setChecked}
//           accessibilityLabel="Se souvenir de moi"
//           label={translate('login.souvenir')}
//         />
//         <Text
//           onPress={handleResetPass}
//           className="font-lato text-xs font-semibold text-primary"
//         >
//           {translate('login.mdpOublier')}
//         </Text>
//       </Container>
//       <Text className="font-lato text-xs font-semibold text-primary">
//         {errors && translate('login.loginError')}
//       </Text>
//       <LoginButton
//         type="button"
//         label={translate('login.connectBtn')}
//         loginFunction={handleSubmit(onSubmit)}
//         radius="rounded-lg"
//         width="w-full"
//         height="h-12"
//         alternativeStyle="my-5"
//       />
//     </View>
//   );
// };
