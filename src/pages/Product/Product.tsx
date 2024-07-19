import { useNavigate, useParams } from 'react-router-dom';
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
import { useState } from 'react';
import { CartData, ProductData } from '../../shared/types/types';
import { useGetProductByIdQuery } from '../../store/api/api.slice';
import { fixImageUrl } from '../../shared/helpers/fixImageUrl';

const initialProduct: ProductData = {
  id: 0,
  title: '',
  price: 0,
  description: '',
  category: {
    id: 0,
    name: '',
    image: '',
  },
  images: [],
};

export const Product = () => {
  const params = useParams();
  const id = params.id as string;

  const cartProducts: CartData[] = useSelector(
    (state: RootState) => state.cartProducts,
  );
  const isAuthorized: boolean = useSelector(
    (state: RootState) => state.auth.isAuthorized,
  );
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const { data: fetchedProduct = initialProduct, isLoading } =
    useGetProductByIdQuery(id);

  const product: CartData = {
    ...fetchedProduct,
    quantity: 0,
  };
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
    if (!isAuthorized) {
      navigate('/auth/login');
      return;
    }

    if (checkDuplication(cartProducts, product)) {
      dispatch(changeQuantity({ id: product.id, quantity: counter }));
    } else {
      dispatch(addNewProduct({ product: product, quantity: counter }));
    }
  }

  if (isLoading) {
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
          <img src={fixImageUrl(product.images[0])} alt="" />
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
