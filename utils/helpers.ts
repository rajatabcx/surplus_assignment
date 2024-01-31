import { Platform } from 'react-native';

export const checkIOS = () => Platform.OS === 'ios';

export const percentageCalculation = (used: number, total: number) =>
  Number(((used / total) * 100).toFixed(2));
