import { Link } from 'react-router-dom';
import { StyledCard } from './ShopPageCard.styles';

interface Props {
  image: string;
  title: string;
  price: number;
  rating: number;
  id: number;
}

export const ShopPageCard = ({ image, title, price, rating, id }: Props) => {
  return (
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
  );
};
