import { useEffect, useState } from 'react';

export const useTimezone = () => {
  const [formattedTimezone, setFormattedTimezone] = useState('');

  useEffect(() => {
    const fetchTimezoneInfo = () => {
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const currentTime = new Date();
      const hours = currentTime.getHours();
      const minutes = currentTime.getMinutes();
      const formattedTime = `${String(hours).padStart(2, '0')}:${String(
        minutes
      ).padStart(2, '0')}`;
      setFormattedTimezone(`${timezone} (${formattedTime})`);
    };

    fetchTimezoneInfo();
  }, []);

  return [formattedTimezone];
};
