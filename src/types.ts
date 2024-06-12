interface Rating {
  rate: number;
  count: number;
}

interface PropsAPI {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

interface CartProps extends PropsAPI {
  quantity: number;
}

interface OutletProps {
  cartProducts: CartProps[];
  setCartProducts: React.Dispatch<React.SetStateAction<CartProps[]>>;
}

export type { PropsAPI, CartProps, OutletProps };
