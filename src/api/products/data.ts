import type { Product } from 'src/types/product';
import { subDays, subHours } from 'date-fns';

const now = new Date();

export const products: Product[] = [
  {
    id: '5ece2c077e39da27658aa8a9',
    attributes: ['Logan EXPRESSION TCe 90 CVT'],
    category: 'logan',
    createdAt: subDays(now, 1).getTime(),
    currency: '',
    image: '/assets/products/product-1.png',
    inStock: true,
    isAvailable: true,
    isShippable: false,
    name: 'Logan EXPRESSION TCe 90 CVT',
    price: 12457,
    quantity: 85,
    sku: 'UU1L5220462400209',
    status: 'Technical Good',
    updatedAt: subHours(now, 6).getTime(),
    variants: 2
  },
  {
    id: '5ece2c0d16f70bff2cf86cd8',
    attributes: ['Logan PRESTIGE ECO-G 100'],
    category: 'logan',
    createdAt: subDays(now, 3).getTime(),
    currency: '',
    image: '/assets/products/product-2.png',
    inStock: false,
    isAvailable: false,
    isShippable: true,
    name: 'Logan PRESTIGE ECO-G 100',
    price: 38992,
    quantity: 0,
    sku: 'UU1L5220441200191',
    status: 'Technical Good',
    updatedAt: subDays(subHours(now, 8), 2).getTime(),
    variants: 1
  },
  {
    id: '5ece2c123fad30cbbff8d060',
    attributes: ['Duster JOURNEY Blue dCi 115 4x4'],
    category: 'duster',
    createdAt: subDays(now, 6).getTime(),
    currency: '',
    image: '/assets/products/product-3.png',
    inStock: true,
    isAvailable: true,
    isShippable: false,
    name: 'Duster JOURNEY Blue dCi 115 4x4',
    price: 49517,
    quantity: 48,
    sku: 'UU1L4239847892374',
    status: 'With problems',
    updatedAt: subDays(subHours(now, 2), 1).getTime(),
    variants: 5
  },
  {
    id: '5ece2c1be7996d1549d94e34',
    attributes: ['Spring Electric 45'],
    category: 'spring',
    createdAt: subDays(now, 12).getTime(),
    currency: '',
    image: '/assets/products/product-4.png',
    inStock: true,
    isAvailable: false,
    isShippable: true,
    name: 'Spring Electric 45',
    price: 780,
    quantity: 5,
    sku: 'UU1L4239847892374',
    status: 'Technical Good',
    updatedAt: subDays(subHours(now, 7), 1).getTime(),
    variants: 1
  },
];
