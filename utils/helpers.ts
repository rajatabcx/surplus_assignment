import { Platform } from 'react-native';

// to fix design issues in different platforms
export const checkIOS = () => Platform.OS === 'ios';

// percentage calculations from values
export const percentageCalculation = (used: number, total: number) =>
  Number(((used / total) * 100).toFixed(2));
