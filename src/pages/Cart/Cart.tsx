import { useOutletContext } from 'react-router-dom';
import { CartData } from '../../shared/types/types';
import { CartCard } from '../../components/CartCard';
import { SendingPage, StyledCart } from './Cart.styles';
import { useMemo, useState } from 'react';

export const Cart = () => {
  const [cartProducts, setCartProducts]: [
    CartData[],
    React.Dispatch<React.SetStateAction<CartData[]>>,
  ] = useOutletContext();

  let totalValue = 0;

  useMemo(() => {
    for (let i = 0; i < cartProducts.length; i++) {
      totalValue += cartProducts[i].price * cartProducts[i].quantity;
    }
  }, [cartProducts]);

  const [isSent, setIsSent] = useState(false);

  function handleClick() {
    setIsSent(true);
    setTimeout(() => setIsSent(false), 2000);
    const emptyProducts: CartData[] = [];
    setCartProducts(emptyProducts);
  }

  return !isSent ? (
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
      {cartProducts.length > 0 ? (
        <div className="checkout">
          <h3>Your total is {totalValue.toFixed(2)} USD</h3>
          <button className="checkoutButton" onClick={handleClick}>
            Check Out
          </button>
        </div>
      ) : (
        <></>
      )}
    </StyledCart>
  ) : (
    <SendingPage>
      <h3>THANKS FOR YOUR PURCHASE</h3>
    </SendingPage>
  );
};
