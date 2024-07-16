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

export const formatDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };
  return new Intl.DateTimeFormat('en-GB', options).format(date);
};
