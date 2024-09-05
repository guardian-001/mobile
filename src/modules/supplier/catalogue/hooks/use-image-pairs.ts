import type { ImageInfo } from '../types';

export const useImagePairs = (images: ImageInfo[]) => {
  const groupImagesInPairs = () => {
    const pairs: ImageInfo[][] = [];
    images.forEach((_, index) => {
      if (index % 3 === 0) {
        pairs.push(images.slice(index, index + 3));
      }
    });
    return pairs;
  };

  return groupImagesInPairs();
};
