import { Link } from 'react-router-dom';
import { StyledCard, CardWrapper } from './ShopPageCard.styles';

interface Props {
  image: string;
  title: string;
  price: number;
  id: number;
  category: string;
}

export const ShopPageCard = ({ image, title, price, category, id }: Props) => {
  return (
    <CardWrapper>
      <Link to={`/product/${id}`} data-testid={id}>
        <StyledCard>
          <div>
            <img src={image} alt="" />
          </div>
          <h3>{title}</h3>
          <p className="price">$ {price}</p>
          {/* <p className="rating">rating: {rating}</p> */}
          <p>{category}</p>
        </StyledCard>
      </Link>
    </CardWrapper>
  );
};
