// import { router } from 'expo-router';
// import * as React from 'react';
// import { Platform } from 'react-native';

// import { type TxKeyPath } from '@/core';
// import ResetFormPassword from '@/modules/reset-password/reset-form-password';
// import {
//   HeaderTitle,
//   KeyboardAvoidingView,
//   ScrollView,
//   Text,
// } from '@/shared/components';
// import { useRouteName } from '@/shared/hooks/use-get-route';

// import ChooseSpeciality from './choose-speciality';
// import CreateProfile from './create-profile';
// import DemoPlanning from './demo-planning';
// import DemoPlanningConfirmation from './demo-planning-confirmation';

// type Props = {};
// export default function SignupStepper({}: Props) {
//   const space = useRouteName();
//   const [step, setStep] = React.useState(0);

//   const handleNextStep = () => {
//     setStep(step + 1);
//   };
//   const stepsContent: {
//     title: TxKeyPath;
//     subtitle: TxKeyPath;
//     component: React.ReactNode;
//   }[] = [
//     {
//       title: 'signupStep1.title',
//       subtitle: 'signupStep1.description',
//       component: <ChooseSpeciality onSubmit={handleNextStep} />,
//     },
//     {
//       title: 'signupStep2.title',
//       subtitle: 'signupStep2.description',
//       component: <CreateProfile onSubmit={handleNextStep} />,
//     },
//     {
//       title: 'signupStep3.title',
//       subtitle: 'signupStep3.description',
//       component: <DemoPlanning onSubmit={handleNextStep} />,
//     },
//     {
//       title: 'signupStep4.title',
//       subtitle: 'signupStep4.description',
//       component: <DemoPlanningConfirmation onSubmit={handleNextStep} />,
//     },
//     {
//       title: 'signupStep5.title',
//       subtitle: 'signupStep5.description',
//       component: (
//         <ResetFormPassword
//           onSubmit={() => router.replace(`/(${space})/(public)/login`)}
//         />
//       ),
//     },
//   ];

//   const { title, subtitle, component } = stepsContent[step];
//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//       className="flex-1 bg-white dark:bg-black"
//     >
//       <HeaderTitle text="signup.headerTitle" type="custom" />
//       <ScrollView
//         className=" flex-1 bg-background p-6 pt-12"
//         contentContainerStyle={{ alignItems: 'center' }}
//       >
//         <Text tx={title} className="mb-2 text-center text-2xl font-extrabold" />
//         <Text
//           tx={subtitle}
//           className="max-w-xs text-center text-sm text-description"
//         />
//         {component}
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// }
