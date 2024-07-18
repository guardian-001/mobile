import { months } from '../components';

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
  const monthName = months[parseInt(month, 10) - 1];

  return `${parseInt(day, 10)} ${monthName} ${year}`;
};

export const formatDateBackend = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};
