import { MdDelete } from 'react-icons/md';
import { TiPlus, TiMinus } from 'react-icons/ti';
import { StyledCard } from './CartCard.styles';
import { CartData } from '../../shared/types/types';
import { Props } from './types';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import {
  changeQuantity,
  decrementQuantity,
  deleteProduct,
  incrementQuantity,
} from '../../store/cartProducts/cartProducts.slice';

export const CartCard = ({
  image,
  title,
  price,
  category,
  id,
  quantity,
}: Props) => {
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
    <StyledCard>
      <Link to={`/product/${id}`}>
        <div>
          <img src={image} alt="" />
        </div>
        <h3>{title}</h3>
        <p className="price">$ {price}</p>
        <p className="rating">category: {category}</p>
      </Link>
      <div className="manageButtons">
        <div className="quantityButtons">
          <TiMinus
            className="decreaseButton"
            onClick={handleQuantityDecrease}
          />
          <input
            className="quantity"
            type="number"
            value={quantity}
            min={0}
            onChange={handleQuantityChange}
          />
          <TiPlus className="increaseButton" onClick={handleQuantityIncrease} />
        </div>
        <MdDelete className="deleteButton" onClick={handleProductDelete} />
      </div>
    </StyledCard>
  );
};
