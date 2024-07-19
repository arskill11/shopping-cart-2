import { SendingPage, StyledCart } from './Cart.styles';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { clearCart } from '../../store/cartProducts/cartProducts.slice';
import { CartData } from '../../shared/types/types';
import { ShopPageCard } from '../../components/ProductCard';
import { ProductCardButtons } from '../../components/ProductCardButtons';
import { fixImageUrl } from '../../shared/helpers/fixImageUrl';

export const Cart = () => {
  const cartProducts: CartData[] = useSelector(
    (state: RootState) => state.cartProducts,
  );
  const dispatch = useDispatch<AppDispatch>();

  let totalValue = 0;

  for (let i = 0; i < cartProducts.length; i++) {
    totalValue += cartProducts[i].price * cartProducts[i].quantity;
  }

  const [isSent, setIsSent] = useState(false);

  function handleClick() {
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
    }, 2000);
    dispatch(clearCart());
  }

  useEffect(() => {}, [cartProducts]);

  return !isSent ? (
    <StyledCart>
      <h2>Your cart</h2>
      <div className="products">
        {cartProducts.map((product) => (
          <ShopPageCard
            key={product.title}
            image={fixImageUrl(product.images[0])}
            title={product.title}
            price={product.price}
            category={product.category.name}
            id={product.id}
            render={() => (
              <ProductCardButtons id={product.id} quantity={product.quantity} />
            )}
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
