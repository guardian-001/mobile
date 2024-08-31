import type { ImageInfo } from '@/types';

export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  productImages: [
    {
      id: number;
      image: string;
    }
  ];
  collectionCategory: string;
  collectionTitle: string;
  order: 0;
  display: false;
};

export type createProductRequestData = {
  name: string;
  price: number;
  description: string;
  productImages: ImageInfo[];
  collectionCategory: string;
  collectionTitle: string;
  order: number;
  display: boolean;
};
