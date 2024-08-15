import { useMemo } from 'react';

const useFormattedDate = (dateString: string): string => {
  const formattedDate = useMemo(() => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    };

    // Format the date using French locale
    return new Intl.DateTimeFormat('fr-FR', options).format(date);
  }, [dateString]);

  return formattedDate;
};

export default useFormattedDate;
