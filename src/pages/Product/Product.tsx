import { useOutletContext, useParams } from 'react-router-dom';
import useProductsQuery from '../../shared/hooks/useProductsQuery';
import { useState } from 'react';
import { CartData } from '../../shared/types/types';
import { checkDuplication } from '../../shared/helpers/utility';
import { Button, ButtonContainer, StyledProduct } from './Product.styles';
import { getProductsById } from '../../api/products';

export const Product = () => {
  const params = useParams();
  const [cartProducts, setCartProducts]: [
    CartData[],
    React.Dispatch<React.SetStateAction<CartData[]>>,
  ] = useOutletContext();

  const id = params.id as string;

  const data = useProductsQuery(getProductsById, id);
  const product: CartData = { ...data[0], quantity: 0 };

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

  return (
    <StyledProduct>
      {data.map((item) => (
        <div className="product" key={item.title}>
          <div className="image">
            <img src={JSON.parse(item.images)[0]} alt="" />
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
