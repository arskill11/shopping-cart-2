import { Link } from 'react-router-dom';
import { StyledCard, CardWrapper } from './ProductCard.styles';
import { Props } from './types';

export const ShopPageCard = ({
  image,
  title,
  price,
  category,
  id,
  render,
}: Props) => {
  return (
    // <CardWrapper>
    //   <Link to={`/product/${id}`} data-testid={id}>
    //     <StyledCard>
    //       <div>
    //         <img src={image} alt="" />
    //       </div>
    //       <h3>{title}</h3>
    //       <p className="price">$ {price}</p>
    //       <p>{category}</p>
    //     </StyledCard>
    //   </Link>
    //   {render && render()}
    // </CardWrapper>
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
