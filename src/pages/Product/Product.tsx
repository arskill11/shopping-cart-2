import { useParams } from 'react-router-dom';
import { checkDuplication } from '../../shared/helpers/utility';
import {
  Button,
  ButtonContainer,
  LoadingPage,
  StyledProduct,
} from './Product.styles';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import {
  addNewProduct,
  changeQuantity,
} from '../../store/cartProducts/cartProducts.slice';
import { useEffect, useState } from 'react';
import {
  CurrentProduct,
  fetchProductById,
} from '../../store/shopProducts/shopProducts.slice';
import { CartData } from '../../shared/types/types';

export const Product = () => {
  const params = useParams();
  const id = params.id as string;

  const cartProducts: CartData[] = useSelector(
    (state: RootState) => state.cartProducts,
  );
  const dispatch = useDispatch<AppDispatch>();

  const data: CurrentProduct = useSelector(
    (state: RootState) => state.shopProducts.currentProduct,
  );

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, []);

  const product: CartData = { ...data, quantity: 0 };

  const [counter, setCounter] = useState<number>(1);

  function handleQuantityDecrease() {
    if (counter === 1) {
      return;
    }
    setCounter(counter - 1);
  }

  function handleQuantityIncrease() {
    setCounter(counter + 1);
  }

  function handleQuantityChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCounter(+e.target.value);
  }

  function handleAddToCart() {
    if (checkDuplication(cartProducts, product)) {
      dispatch(changeQuantity({ id: product.id, quantity: counter }));
    } else {
      dispatch(addNewProduct({ product: product, quantity: counter }));
    }
  }

  if (data.isLoading) {
    return (
      <LoadingPage>
        <h2>Loading content...</h2>
      </LoadingPage>
    );
  }

  return (
    <StyledProduct>
      <div className="product" key={product.title}>
        <div className="image">
          <img src={product.images[0]} alt="" />
        </div>
        <h3>{product.title}</h3>
        <p>USD {product.price}</p>
        <ButtonContainer>
          <Button onClick={handleAddToCart}>Add to cart</Button>
          <div className="counter">
            <button onClick={handleQuantityDecrease}>-</button>
            <input
              type="number"
              min={0}
              max={25}
              onChange={handleQuantityChange}
              value={counter}
            />
            <button onClick={handleQuantityIncrease}>+</button>
          </div>
        </ButtonContainer>
      </div>
    </StyledProduct>
  );
};
