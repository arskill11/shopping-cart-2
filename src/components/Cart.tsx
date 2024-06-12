import { useOutletContext } from 'react-router-dom';
import styled from 'styled-components';
import { CartProps } from '../types';
import Card from './Card';

const StyledCart = styled.div`
  height: 100vh;
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 40px;
    padding-top: 120px;
  }

  div.products {
    width: 100%;
    justify-content: flex-start;
    display: flex;
    flex-wrap: wrap;
    padding: 50px;
    gap: 25px;
  }
`;

const Cart = () => {
  const [cartProducts, setCartProducts]: [
    CartProps[],
    React.Dispatch<React.SetStateAction<CartProps[]>>,
  ] = useOutletContext();

  return (
    <StyledCart>
      <h2>Your cart</h2>
      <div className="products">
        {cartProducts.map((product) => (
          <Card
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

export default Cart;
