import styled from 'styled-components';
import { useOutletContext, useParams } from 'react-router-dom';
import useAPIProducts from '../useAPIproducts';
import { useState } from 'react';
import { CartProps } from '../types';
import { checkDuplication } from '../utility';

const StyledProduct = styled.div`
  min-height: 100vh;
  background-color: rgb(230, 234, 254);
  padding: 130px 50px;

  div.product {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  div.product div.image {
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: white;
    padding: 80px 0;
    border-radius: 10px;
    box-shadow: 2px 2px darkgray;
    max-height: 50vh;
  }

  div.image img {
    width: 15%;
  }

  h3 {
    font-size: 40px;
  }
  p {
    font-size: 28px;
    font-style: italic;
  }
`;

const Button = styled.button`
  padding: 15px;
  background-color: rgb(180, 189, 236);
  border-radius: 15px;
  width: 20%;
  font-size: 1.4rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;

  div.counter input {
    border-radius: 20px;
    font-size: 1.4rem;
    padding: 10px;
    width: 5rem;
    gap: 15px;
  }

  div.counter {
    display: flex;
    gap: 15px;
  }

  div.counter button {
    width: 50px;
    border-radius: 100%;
    font-size: 30px;
  }
`;

const Product = () => {
  const params = useParams();
  const [cartProducts, setCartProducts]: [
    CartProps[],
    React.Dispatch<React.SetStateAction<CartProps[]>>,
  ] = useOutletContext();
  const data = useAPIProducts(`https://fakestoreapi.com/products/${params.id}`);
  const product: CartProps = { ...data[0], quantity: 0 };

  const [counter, setCounter] = useState<number>(1);

  function handleDecrease() {
    if (counter === 1) {
      return;
    }
    setCounter(counter - 1);
  }

  function handleIncrease() {
    setCounter(counter + 1);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCounter(+e.target.value);
  }

  function handleClick() {
    const nextProducts = cartProducts.map((item) => {
      if (item.id === product.id) {
        return { ...item, quantity: item.quantity + counter };
      } else {
        return item;
      }
    });

    if (!checkDuplication(cartProducts, product)) {
      setCartProducts([...cartProducts, { ...product, quantity: counter }]);
    } else {
      setCartProducts(nextProducts);
    }
  }

  console.log(cartProducts);

  return (
    <StyledProduct>
      {data.map((item) => (
        <div className="product">
          <div className="image">
            <img src={item.image} alt="" />
          </div>
          <h3>{item.title}</h3>
          <p>USD {item.price}</p>
          <ButtonContainer>
            <Button onClick={handleClick}>Add to cart</Button>
            <div className="counter">
              <button onClick={handleDecrease}>-</button>
              <input
                type="number"
                min={0}
                max={25}
                onChange={handleChange}
                value={counter}
              />
              <button onClick={handleIncrease}>+</button>
            </div>
          </ButtonContainer>
        </div>
      ))}
    </StyledProduct>
  );
};

export default Product;
