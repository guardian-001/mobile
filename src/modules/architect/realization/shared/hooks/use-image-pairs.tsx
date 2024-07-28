import type { ImageInfo } from '../types';

export const useImagePairs = (images: ImageInfo[]) => {
  const groupImagesInPairs = () => {
    const pairs = [];
    for (let i = 0; i < images.length; i += 2) {
      pairs.push(images.slice(i, i + 2));
    }
    return pairs;
  };

  return groupImagesInPairs();
};
