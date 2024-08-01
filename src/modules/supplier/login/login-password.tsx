// import React from 'react';
// import { View } from 'react-native';
// import { KeyboardAvoidingView, Platform } from 'react-native';

// import { translate, useCustomForm } from '@/core';
// import { Conditions, Container } from '@/modules/shared';
// import LoginButton from '@/modules/shared/login-button';
// import { HeaderTitle, Image, ImageContainer } from '@/shared/components';
// import { ControlledInput, Text } from '@/shared/components';
// import { PasswordSchema } from '@/shared/validations';

// export const PasswordForm = () => {
//   const { handleSubmit, control } = useCustomForm(PasswordSchema);

//   return (
//     <View className="flex h-full w-full items-center justify-center">
//       <KeyboardAvoidingView
//         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//         className={` my-20 flex w-[90%] flex-1 items-center justify-start bg-secondary`}
//       >
//         <HeaderTitle text="signup.headerTitle" type="custom" />

//         <View>
//           <Text className="text-center font-lato text-2xl font-extrabold text-primary-txt ">
//             {translate('loginSupplier.bienvenueSurArchimatch')}
//           </Text>
//           <Text className="max-w-60 my-2 text-center font-lato text-sm text-description">
//             {translate('loginSupplier.kitPartenariatPro')}
//           </Text>
//         </View>
//         <Container style="flex w-full h-[40%] items-center mb-0 justify-between gap-3 bg-white  pb-2">
//           <ImageContainer className="w-full flex-1">
//             <Image
//               className="h-full w-full overflow-hidden rounded-t-xl"
//               contentFit="cover"
//               source={require('@/assets/supplier-login-screen.png')}
//             />
//           </ImageContainer>
//         </Container>
//         <View className="w-8/10 mt-5 flex justify-center">
//           <ControlledInput
//             testID="password-input"
//             control={control}
//             name="password"
//             label={translate('login.mdp')}
//             placeholder={translate('login.mdp')}
//             secureTextEntry={true}
//           />
//           <LoginButton
//             type="button"
//             label={translate('login.connectBtn')}
//             loginFunction={handleSubmit(onSubmit)}
//             radius="rounded-lg"
//             width="w-full"
//             height="h-12"
//             alternativeStyle="my-5"
//           />
//         </View>
//         <Conditions />
//       </KeyboardAvoidingView>
//     </View>
//   );
// };
