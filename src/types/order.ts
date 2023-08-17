interface OrderCustomer {
  address1?: string;
  address2?: string;
  avatar?: string;
  city?: string;
  country?: string;
  email: string;
  name: string;
}

export interface OrderItem {
  id: string;
  billingCycle: 'daily' | 'weekly' | 'monthly' | 'yearly' | 'one time';
  currency: string;
  name: string;
  quantity: number;
  unitAmount: number;
}

export interface OrderLog {
  id: string;
  createdAt: number;
  message: string;
}

export type OrderStatus =
  | 'canceled'
  | 'complete'
  | 'pending'
  | 'rejected';

export interface Order {
  id: string;
  coupon?: string | null;
  createdAt: number;
  currency?: string;
  customer: OrderCustomer;
  items?: OrderItem[];
  logs?: OrderLog[];
  number?: string;
  paymentMethod: string;
  promotionCode?: string;
  status: OrderStatus;
  totalAmount?: number;
}
