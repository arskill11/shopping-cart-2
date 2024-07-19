import { Link } from 'react-router-dom';
import { StyledCard } from './ProductCard.styles';
import { Props } from './types';
import { reduceTitle } from '../../shared/helpers/utility';

export const ShopPageCard = ({
  image,
  title,
  price,
  category,
  id,
  render,
}: Props) => {
  title = reduceTitle(title);

  return (
    <StyledCard
      className={typeof render === 'undefined' ? 'shopCard' : 'cartCard'}
    >
      <Link
        className={typeof render === 'undefined' ? 'shopCard' : 'cartCard'}
        to={`/product/${id}`}
      >
        <div>
          <img src={image} alt="" />
        </div>
        <h3>{title}</h3>
        <p className="price">$ {price}</p>
        <p className="category">category: {category}</p>
      </Link>
      {render && render()}
    </StyledCard>
  );
};
