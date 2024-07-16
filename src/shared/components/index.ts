import { cssInterop } from 'nativewind';
import Svg from 'react-native-svg';

export { default as colors } from '../../theme/colors';
export * from '../constants/constants';
export * from './button';
export * from './calendar';
export * from './calendar-day-item';
export * from './calendar-days-list';
export * from './calendar-view';
export * from './checkbox';
export * from './checkbox-input';
export * from './controlled-input';
export * from './focus-aware-status-bar';
export * from './header-title';
export * from './image';
export { default as ImageContainer } from './image-container';
export * from './input';
export * from './item';
export * from './item-time-slot-render';
export * from './items-container';
export * from './list';
export * from './modal';
export * from './progress-bar';
export * from './radio';
export * from './radio-input';
export * from './screen-options';
export * from './select';
export * from './switch';
export * from './switch-input';
export * from './text';
export * from './time-item';
export * from './time-slots-render-pagination';
export * from './title';
export * from './toggle-card';
export * from './utils';

// export base components from react-native
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

//Apply cssInterop to Svg to resolve className string into style
cssInterop(Svg, {
  className: {
    target: 'style',
  },
});
