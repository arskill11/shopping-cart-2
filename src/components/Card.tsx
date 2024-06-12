import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MdDelete } from 'react-icons/md';
import { TiPlus, TiMinus } from 'react-icons/ti';
import { CartProps } from '../types';

const StyledCard = styled.div`
  border-radius: 15px;
  box-shadow: 1px 1px darkgray;
  height: 350px;
  width: 275px;
  background: white;
  padding: 20px;
  display: grid;
  grid-template-rows: 4fr 2.5fr 0.5fr 0.5fr;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 40%;
  }

  h3 {
    align-self: start;
  }

  p.price,
  p.rating {
    align-self: end;
    font-size: 20px;
  }
`;

const CartCard = styled(StyledCard)`
  height: 400px;
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  a {
    display: grid;
    grid-template-rows: 4fr 1.5fr 0.5fr 0.5fr;
    height: 85%;
    width: 100%;
    gap: 10px;
    text-decoration: none;
    color: black;
  }

  div.manageButtons {
    display: flex;
    justify-content: space-between;
  }

  div.quantityButtons {
    display: flex;
    gap: 8px;
  }

  button {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }

  input {
    font-size: 1.2rem;
    padding: 5px;
    width: 3rem;
    border-radius: 8px;
  }

  .deleteButton,
  .increaseButton,
  .decreaseButton {
    font-size: 30px;
  }
`;

interface Props {
  image: string;
  title: string;
  price: number;
  rating: number;
  id: number;
  quantity?: number;
  cartProducts?: CartProps[];
  setCartProducts?: React.Dispatch<React.SetStateAction<CartProps[]>>;
}

const Card = ({
  image,
  title,
  price,
  rating,
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
    <>
      {typeof quantity === 'number' ? (
        <CartCard>
          <Link to={`/product/${id}`}>
            <div>
              <img src={image} alt="" />
            </div>
            <h3>{title}</h3>
            <p className="price">$ {price}</p>
            <p className="rating">rating: {rating}</p>
          </Link>
          <div className="manageButtons">
            <div className="quantityButtons">
              <TiMinus className="decreaseButton" onClick={handleDecrease} />
              <input
                className="quantity"
                type="number"
                value={quantity}
                min={0}
              />
              <TiPlus className="increaseButton" onClick={handleIncrease} />
            </div>
            <MdDelete className="deleteButton" onClick={handleDelete} />
          </div>
        </CartCard>
      ) : (
        <Link to={`/product/${id}`} data-testid={id}>
          <StyledCard>
            <div>
              <img src={image} alt="" />
            </div>
            <h3>{title}</h3>
            <p className="price">$ {price}</p>
            <p className="rating">rating: {rating}</p>
          </StyledCard>
        </Link>
      )}
    </>
  );
};

export default Card;
