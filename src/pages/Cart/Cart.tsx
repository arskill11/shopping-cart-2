import { CartCard } from '../../components/CartCard';
import { SendingPage, StyledCart } from './Cart.styles';
import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { clearCart } from '../../store/cartProducts/cartProducts.slice';

export const Cart = () => {
  const cartProducts = useSelector((state: RootState) => state.cartProducts);
  const dispatch = useDispatch();

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
    dispatch(clearCart());
  }

  return !isSent ? (
    <StyledCart>
      <h2>Your cart</h2>
      <div className="products">
        {cartProducts.map((product) => (
          <CartCard
            key={product.title}
            image={product.images[0]}
            title={product.title}
            price={product.price}
            category={product.category.name}
            id={product.id}
            quantity={product.quantity}
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
