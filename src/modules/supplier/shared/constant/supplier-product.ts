import type { Product } from '../../profile/type';

export const DEFAULT_PRODUCT: Product = {
  id: -1,
  name: '',
  price: 0,
  description: '',
  productImages: [{ id: 0, image: '' }],
  collectionCategory: '',
  collectionTitle: '',
  order: 0,
  display: false,
};
