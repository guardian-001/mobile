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
