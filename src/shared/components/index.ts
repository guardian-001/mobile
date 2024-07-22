import { cssInterop } from 'nativewind';
import Svg from 'react-native-svg';

export { default as colors } from '../../theme/colors';
export * from './button';
export * from './calendar';
export * from './calendar-day';
export * from './calendar-days-list';
export * from './checkbox';
export * from './checkbox-input';
export * from './controlled-input';
export * from './focus-aware-status-bar';
export * from './gradient-background';
export * from './header-title';
export * from './image';
export { default as ImageContainer } from './image-container';
export * from './input';
export * from './item';
export * from './items-container';
export * from './list';
export * from './modal';
export * from './pagination-time-slots';
export * from './progress-bar';
export * from './radio';
export * from './radio-input';
export * from './screen-options';
export * from './select';
export * from './switch';
export * from './switch-input';
export * from './text';
export * from './title';
export * from './toggle-button';
export * from './toggle-card';
export * from './utils';
export {
  ActivityIndicator,
  KeyboardAvoidingView,
  Pressable,
  type PressableProps,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
export { SafeAreaView } from 'react-native-safe-area-context';
cssInterop(Svg, {
  className: {
    target: 'style',
  },
});
