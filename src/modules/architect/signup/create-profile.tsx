// import { zodResolver } from '@hookform/resolvers/zod';
// import React from 'react';
// import type { SubmitHandler } from 'react-hook-form';
// import { useForm } from 'react-hook-form';
// import { Text, View } from 'react-native';

// import type { FormType } from '@/modules/login/login-form';
// import { EmailSchema } from '@/validations';
// export type ResetFormProps = {
//   onSubmit?: SubmitHandler<FormType>;
// };

// export default function CreateProfile({ onSubmit = () => {} }: ResetFormProps) {
//   const { handleSubmit, control, formState } = useForm<FormType>({
//     resolver: zodResolver(EmailSchema),
//   });
//   return (
//     <View>
//       <Text>create profile</Text>
//     </View>
//   );
// }
