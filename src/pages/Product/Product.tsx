import { useParams } from 'react-router-dom';
import useProductsQuery from '../../shared/hooks/useProductsQuery';
import { CartData } from '../../shared/types/types';
import { checkDuplication } from '../../shared/helpers/utility';
import { Button, ButtonContainer, StyledProduct } from './Product.styles';
import { getProductsById } from '../../api/products';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import {
  decrement,
  increment,
  setValue,
} from '../../state/quantityCounter/quantityCounter.slice';
import {
  addNewProduct,
  changeQuantity,
  incrementQuantityByNumber,
} from '../../state/cartProducts/cartProducts.slice';
import { useEffect } from 'react';

export const Product = () => {
  const params = useParams();
  const id = params.id as string;

  const cartProducts: CartData[] = useSelector(
    (state: RootState) => state.cartProducts,
  );
  const quantityCounter: number = useSelector(
    (state: RootState) => state.quantityCounter.value,
  );
  const dispatch = useDispatch();

  const data = useProductsQuery(getProductsById, id);
  const product: CartData = { ...data[0], quantity: 0 };

  useEffect(() => {
    dispatch(setValue(1));
  }, []);

  function handleDecrease() {
    if (quantityCounter === 1) {
      return;
    }
    dispatch(decrement());
  }

  function handleIncrease() {
    dispatch(increment());
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(setValue(+e.target.value));
  }

  function handleClick() {
    cartProducts.map((item) => {
      if (product.id === item.id) {
        dispatch(
          incrementQuantityByNumber({
            id: product.id,
            amount: quantityCounter,
          }),
        );
      } else {
        return item;
      }
    });

    if (!checkDuplication(cartProducts, product)) {
      dispatch(addNewProduct(product));

      dispatch(changeQuantity({ id: product.id, quantity: quantityCounter }));
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
                value={quantityCounter}
              />
              <button onClick={handleIncrease}>+</button>
            </div>
          </ButtonContainer>
        </div>
      ))}
    </StyledProduct>
  );
};
