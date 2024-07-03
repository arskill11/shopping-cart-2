import { Link } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';
import { TiPlus, TiMinus } from 'react-icons/ti';
import { CartData } from '../../shared/types/types';
import { StyledCard } from './CartCard.styles';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import {
  changeQuantity,
  decrementQuantity,
  deleteProduct,
  incrementQuantity,
} from '../../state/cartProducts/cartProducts.slice';

interface Props {
  image: string;
  title: string;
  price: number;
  category: string;
  id: number;
  quantity?: number;
}

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
  const dispatch = useDispatch();

  function handleDecrease() {
    if (quantity === 1) {
      return;
    }
    if (cartProducts) {
      cartProducts.map((item) => {
        if (item.id === id) {
          dispatch(decrementQuantity(id));
        } else {
          return;
        }
      });
    }
  }

  function handleIncrease() {
    if (cartProducts) {
      cartProducts.map((item) => {
        if (item.id === id) {
          dispatch(incrementQuantity(id));
        } else {
          return;
        }
      });
    }
  }

  function handleDelete() {
    if (cartProducts) {
      console.log(id);
      dispatch(deleteProduct(id));
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
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
          <TiMinus className="decreaseButton" onClick={handleDecrease} />
          <input
            className="quantity"
            type="number"
            value={quantity}
            min={0}
            onChange={handleChange}
          />
          <TiPlus className="increaseButton" onClick={handleIncrease} />
        </div>
        <MdDelete className="deleteButton" onClick={handleDelete} />
      </div>
    </StyledCard>
  );
};
