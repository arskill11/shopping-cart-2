import { ProductData } from '../../shared/types/types';
import useProductsQuery from '../../shared/hooks/useProductsQuery';
import { useParams } from 'react-router-dom';
import { StyledCards } from './ShopPageCardList.styles';
import { ShopPageCard } from '../ShopPageCard';

const Cards = () => {
  const params = useParams();
  const url = params.category ? `category/${params.category}` : ``;
  const goods: ProductData[] = useProductsQuery(
    `https://fakestoreapi.com/products/${url}`,
  );

  return (
    <StyledCards>
      <div className="goods">
        {goods.map((good) => (
          <ShopPageCard
            key={good.id}
            image={good.image}
            title={good.title}
            price={good.price}
            rating={good.rating.rate}
            id={good.id}
          />
        ))}
      </div>
    </StyledCards>
  );
};

export default Cards;
