import { Link } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';
import { TiPlus, TiMinus } from 'react-icons/ti';
import { CartData } from '../../shared/types/types';
import { StyledCard } from './CartCard.styles';

interface Props {
  image: string;
  title: string;
  price: number;
  // rating: number;
  category: string;
  id: number;
  quantity?: number;
  cartProducts?: CartData[];
  setCartProducts?: React.Dispatch<React.SetStateAction<CartData[]>>;
}

export const CartCard = ({
  image,
  title,
  price,
  category,
  id,
  quantity,
  cartProducts,
  setCartProducts,
}: Props) => {
  function handleDecrease() {
    if (quantity === 1) {
      return;
    }
    if (cartProducts && setCartProducts) {
      const nextProducts = cartProducts.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
      setCartProducts(nextProducts);
    }
  }

  function handleIncrease() {
    if (cartProducts && setCartProducts) {
      const nextProducts = cartProducts.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      setCartProducts(nextProducts);
    }
  }

  function handleDelete() {
    if (cartProducts && setCartProducts) {
      setCartProducts(cartProducts.filter((item) => item.id !== id));
    }
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
          <input className="quantity" type="number" value={quantity} min={0} />
          <TiPlus className="increaseButton" onClick={handleIncrease} />
        </div>
        <MdDelete className="deleteButton" onClick={handleDelete} />
      </div>
    </StyledCard>
  );
};
