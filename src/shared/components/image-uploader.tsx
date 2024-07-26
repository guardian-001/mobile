// import React from 'react';
// import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
// import { useTailwind } from 'nativewind';
// import { useFormContext } from 'react-hook-form';
// import useImageUploader from '@/src/app/shared/hooks/useImageUploader';
// import { Button } from '@/src/app/shared/components';

// const ImageUploader = ({ name, className }) => {
//   const { tailwind } = useTailwind();
//   const form = useFormContext();
//   const {
//     images,
//     isDragging,
//     error,
//     fileInputRef,
//     selectFiles,
//     onSelectFile,
//     deleteImage,
//     onDragOver,
//     onDragLeave,
//     onDrop,
//     tConstants
//   } = useImageUploader({ form, name });

//   return (
//     <View style={tailwind('w-full overflow-hidden rounded-md p-2')}>
//       <View
//         style={tailwind(`flex w-full flex-col items-center justify-center rounded-md border border-dashed border-primary p-4 ${className}`)}
//         onDragOver={onDragOver}
//         onDragLeave={onDragLeave}
//         onDrop={onDrop}
//       >
//         <Image
//           source={require('@/assets/images/upload.png')}
//           style={tailwind('mb-4')}
//           width={100}
//           height={100}
//         />
//         {isDragging ? (
//           <>
//             <Text style={tailwind('text-lg text-secondary')}>
//               {tConstants('uploadImageDroppingTitle')}
//             </Text>
//             <Text style={tailwind('hidden text-[14px] text-text-secondary md:flex')}>
//               {tConstants('uploadImageSubTitle')}
//             </Text>
//             <Button
//               style={tailwind('mt-3')}
//               onPress={selectFiles}
//               size="sm"
//               disabled
//             >
//               {tConstants('uploadImageButtonLabel')}
//             </Button>
//           </>
//         ) : (
//           <>
//             <Text style={tailwind('text-sm text-secondary md:text-lg')}>
//               {tConstants('uploadImageDroppingTitle')}
//             </Text>
//             <Text style={tailwind('hidden text-[14px] text-text-secondary md:flex')}>
//               {tConstants('uploadImageSubTitle')}
//             </Text>
//             <Button
//               style={tailwind('mt-3')}
//               onPress={selectFiles}
//               size="sm"
//             >
//               {tConstants('uploadImageButtonLabel')}
//             </Button>
//           </>
//         )}

//         {error && <Text style={tailwind('mt-2 text-sm text-red-500')}>{error}</Text>}

//         <input
//           type="file"
//           name="file"
//           className="hidden"
//           id="file"
//           multiple
//           ref={fileInputRef}
//           onChange={onSelectFile}
//         />
//       </View>
//       <View style={tailwind('mt-3 flex h-auto max-h-[200px] w-full flex-wrap items-start justify-start overflow-y-auto')}>
//         <FlatList
//           data={images}
//           keyExtractor={(item, index) => index.toString()}
//           renderItem={({ item, index }) => (
//             <View style={tailwind('relative mb-2 mr-1 h-[102px] max-h-[102px] w-[125px]')}>
//               <TouchableOpacity
//                 onPress={() => deleteImage(index)}
//                 style={tailwind('absolute right-1 top-1 z-50 h-5 w-5 cursor-pointer text-lg text-text-secondary')}
//               >
//                 <Text style={tailwind('text-lg text-text-secondary')}>X</Text>
//               </TouchableOpacity>
//               <Image
//                 source={{ uri: item.url }}
//                 style={tailwind('rounded-lg')}
//                 width={125}
//                 height={102}
//                 quality={100}
//               />
//             </View>
//           )}
//         />
//       </View>
//     </View>
//   );
// };

// export default ImageUploader;
