import { cssInterop } from 'nativewind';
import Svg from 'react-native-svg';

export { default as colors } from '../../theme/colors';
export * from './button';
export * from './checkbox';
export * from './controlled-input';
export * from './focus-aware-status-bar';
export * from './image';
export { default as ImageContainer } from './image-container';
export * from './input';
export * from './list';
export * from './modal';
export * from './progress-bar';
export * from './radio';
export * from './select';
export * from './switch';
export * from './text';
export * from './utils';

// export base components from react-native
export {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
export { SafeAreaView } from 'react-native-safe-area-context';

//Apply cssInterop to Svg to resolve className string into style
cssInterop(Svg, {
  className: {
    target: 'style',
  },
});
