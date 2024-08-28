// import React from 'react';
// import { ScrollView, StyleSheet, View } from 'react-native';

// import { Eye, Profile } from '@/assets/icons/archimatch';
// import { CategoryData } from '@/modules/client/create-announcement/dump-data';
// import {
//   colors,
//   GradientBackground,
//   Image,
//   Tag,
//   Text,
// } from '@/shared/components';

// import { useProfileInfo } from './hooks/use-profile-info';

// export default function CatalogueHeader() {
//   const { data } = useProfileInfo();

//   return (
//     <View className="h-60 w-full ">
//       <GradientBackground
//         start={{ x: 0, y: 0 }}
//         end={{ x: 0, y: 1 }}
//         colors={[colors['lighter-blue-linear'], colors['light-blue-linear']]}
//         style={styles.container}
//       >
//         <View className="  flex h-full w-full items-center  justify-center px-3 py-2">
//           <View className="  flex h-full w-full flex-row items-end   ">
//             {/* bg-black */}
//             <View className="flex h-fit w-full  flex-row items-start justify-between ">
//               {/* bg-slate-300 */}
//               {data?.profileImage ? (
//                 <View className="rounded-full bg-white shadow-md shadow-color-shadow ">
//                   <Image
//                     source={data?.profileImage}
//                     className="  h-20 w-20 rounded-full"
//                   />
//                 </View>
//               ) : (
//                 <View className=" absolute -z-10 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100  ">
//                   <Profile width={20} height={30} color={colors.gray[400]} />
//                 </View>
//               )}
//               <View className="flex flex-row items-center justify-center gap-1">
//                 <Eye />

//                 <Text
//                   tx="catalogue.preview"
//                   className="text-end text-xl   font-semibold text-main-project-blue underline"
//                 />
//               </View>
//             </View>
//           </View>

//           {isSuccessCategory && (
//             <ScrollView
//               horizontal={true}
//               showsHorizontalScrollIndicator={false}
//               contentContainerClassName="px-4"
//               className="max-h-16 "
//             >
//               {CategoryData?.map((tag) => (
//                 <Tag
//                   key={tag.id}
//                   label={tag.label}
//                   name="projectCategory"
//                   control={control}
//                   imageIcon={tag.icon}
//                   className="flex h-12 max-w-xl flex-row items-center justify-evenly"
//                   obligation={true}
//                 />
//               ))}
//             </ScrollView>
//           )}

//           {/* bg-primary */}
//         </View>
//       </GradientBackground>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     width: '100%',
//     height: '100%',
//   },
// });
