interface Rating {
  rate: number;
  count: number;
}

interface ProductData {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

interface CartData extends ProductData {
  quantity: number;
}

interface OutletProps {
  cartProducts: CartData[];
  setCartProducts: React.Dispatch<React.SetStateAction<CartData[]>>;
}

type SortCriteria = 'price' | 'rate' | null;
type SortParameters = 'ascending' | 'descending';

export type {
  ProductData,
  CartData,
  OutletProps,
  SortCriteria,
  SortParameters,
};
