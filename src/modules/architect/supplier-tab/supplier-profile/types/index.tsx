import type {
  Collection,
  SupplierProfileInfoType,
} from '@/api/supplier/profile/types';

export type iconDataType = {
  id: number;
  label: string;
  icon: React.ComponentType<{ color?: string }>;
};

export type CatalogueProps = {
  collections: Collection[];
};
export type AboutProps = {
  supplierData: SupplierProfileInfoType | null;
};

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
