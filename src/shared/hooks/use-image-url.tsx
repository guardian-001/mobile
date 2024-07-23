import { Env } from '@env';

const useImageUrl = (image?: string): string => {
  return `${Env.API_URL}${image}`;
};

export default useImageUrl;
