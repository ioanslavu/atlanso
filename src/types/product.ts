export interface Product {
  id: string;
  attributes: string[];
  category: string;
  createdAt: number;
  currency: string;
  image: string | null;
  inStock: boolean;
  isAvailable: boolean;
  isShippable: boolean;
  name: string;
  price: number;
  quantity: number;
  sku: string;
  status: 'Technical Good' | 'With problems';
  updatedAt: number;
  variants: number;
}
