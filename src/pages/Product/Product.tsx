import { useParams } from 'react-router-dom';
import useProductsQuery from '../../shared/hooks/useProductsQuery';
import { CartData } from '../../shared/types/types';
import { checkDuplication } from '../../shared/helpers/utility';
import { Button, ButtonContainer, StyledProduct } from './Product.styles';
import { getProductsById } from '../../api/products';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import {
  addNewProduct,
  changeQuantity,
  incrementQuantityByNumber,
} from '../../store/cartProducts/cartProducts.slice';
import { useEffect, useState } from 'react';

export const Product = () => {
  const params = useParams();
  const id = params.id as string;

  const cartProducts: CartData[] = useSelector(
    (state: RootState) => state.cartProducts,
  );
  const dispatch = useDispatch();

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
    cartProducts.map((item) => {
      if (product.id === item.id) {
        dispatch(
          incrementQuantityByNumber({
            id: product.id,
            amount: counter,
          }),
        );
      } else {
        return item;
      }
    });

    if (!checkDuplication(cartProducts, product)) {
      dispatch(addNewProduct(product));

      dispatch(changeQuantity({ id: product.id, quantity: counter }));
    } else {
      console.log(cartProducts);

      dispatch(addNewProduct(product));
    }
  }

  return (
    <StyledProduct>
      {data.map((item) => (
        <div className="product" key={item.title}>
          <div className="image">
            <img src={item.images[0]} alt="" />
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
