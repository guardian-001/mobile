import type { ImageInfo } from '../types';

export const useImageList = (images: ImageInfo[]) => {
  const shouldRenderUploader = (index: number, subIndex: number) => {
    return (
      images.length % 3 > 0 &&
      index === Math.floor(images.length / 3) &&
      index * 3 + subIndex + 1 === images.length
    );
  };

  return { shouldRenderUploader };
};
