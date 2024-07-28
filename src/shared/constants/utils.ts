import type { ImageInfo } from '@/modules/architect/realization/shared/types';
import type { Image } from '@/types';

export async function fetchImage({ url, name }: Image): Promise<File | null> {
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    return new File([blob], name);
  } catch (error) {
    console.error(`Error fetching the file: ${name}`, error);
    return null;
  }
}

export async function fetchAllImages(imageArray: ImageInfo[]): Promise<File[]> {
  const fetchPromises: Promise<File | null>[] = imageArray.map((image) =>
    fetchImage({ url: image.uri, name: image.name as string })
  );

  try {
    const files: (File | null)[] = await Promise.all(fetchPromises);
    const filteredFiles = files.filter((file): file is File => file !== null);

    return filteredFiles;
  } catch (error) {
    console.error('Error fetching all images:', error);
    return [];
  }
}
