import { TiMinus, TiPlus } from 'react-icons/ti';
import { MdDelete } from 'react-icons/md';
import { Container } from './ProductCardButtons.styles';
import { CartData } from '../../shared/types/types';
import { AppDispatch, RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeQuantity,
  decrementQuantity,
  deleteProduct,
  incrementQuantity,
} from '../../store/cartProducts/cartProducts.slice';
import { Props } from './types';

export const ProductCardButtons = ({ id, quantity }: Props) => {
  const cartProducts: CartData[] = useSelector(
    (state: RootState) => state.cartProducts,
  );
  const dispatch = useDispatch<AppDispatch>();

  function handleQuantityDecrease() {
    if (quantity === 1) {
      return;
    } else {
      dispatch(decrementQuantity(id));
    }
  }

  function handleQuantityIncrease() {
    dispatch(incrementQuantity(id));
  }

  function handleProductDelete() {
    if (cartProducts) {
      dispatch(deleteProduct(id));
    }
  }

  function handleQuantityChange(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(changeQuantity({ id: id, quantity: +e.target.value }));
  }

  return (
    <Container>
      <div className="quantityButtons">
        <TiMinus className="decreaseButton" onClick={handleQuantityDecrease} />
        <input
          className="quantity"
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
        />
        <TiPlus className="increaseButton" onClick={handleQuantityIncrease} />
      </div>
      <MdDelete className="deleteButton" onClick={handleProductDelete} />
    </Container>
  );
};
