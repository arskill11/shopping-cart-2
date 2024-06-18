import { useOutletContext } from 'react-router-dom';
import { CartData } from '../../shared/types/types';
import { CartCard } from '../CartCard/';
import { StyledCart } from './Cart.styles';

export const Cart = () => {
  const [cartProducts, setCartProducts]: [
    CartData[],
    React.Dispatch<React.SetStateAction<CartData[]>>,
  ] = useOutletContext();

  return (
    <StyledCart>
      <h2>Your cart</h2>
      <div className="products">
        {cartProducts.map((product) => (
          <CartCard
            image={product.image}
            title={product.title}
            price={product.price}
            rating={product.rating.rate}
            id={product.id}
            quantity={product.quantity}
            cartProducts={cartProducts}
            setCartProducts={setCartProducts}
          />
        ))}
      </div>
    </StyledCart>
  );
};
