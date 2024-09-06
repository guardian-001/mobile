import { Dimensions } from 'react-native';

import { MONTHS } from '../constants';

export function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function splitList<T>(arr: T[], chunkSize: number): T[][] {
  const result: T[][] = [];
  arr.forEach((_, i) => {
    if (i % chunkSize === 0) {
      result.push(arr.slice(i, i + chunkSize));
    }
  });
  return result;
}

export const formatDate = (date: string): string => {
  const [year, month, day] = date.split('-');
  const monthName = MONTHS[parseInt(month, 10) - 1];

  return `${parseInt(day, 10)} ${monthName} ${year}`;
};

export const formatDateBackend = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};

export function add30Minutes(time: string) {
  const [hours, minutes] = time.split(':').map(Number);
  const date = new Date();
  date.setHours(hours, minutes);
  date.setMinutes(date.getMinutes() + 30);
  const newHours = String(date.getHours()).padStart(2, '0');
  const newMinutes = String(date.getMinutes()).padStart(2, '0');
  return `${newHours}:${newMinutes}`;
}

export const WIDTH = Dimensions.get('window').width;
export const HEIGHT = Dimensions.get('window').height;

export const deepEqual = (obj1: any, obj2: any) => {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
};
